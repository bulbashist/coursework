import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
  WebSocketServer,
  OnGatewayConnection,
} from '@nestjs/websockets';
import { IOrder, OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { UseGuards } from '@nestjs/common';
import { Server, Socket } from 'socket.io';
import { AuthGuard } from 'src/auth/auth.guard';
import { Roles } from 'src/users/decorators/roles.decorators';
import { UserRole } from 'src/users/users.types';
import { JwtService } from '@nestjs/jwt';

@WebSocketGateway({ cors: true })
export class OrdersGateway implements OnGatewayConnection {
  @WebSocketServer() server: Server;

  constructor(
    private readonly ordersService: OrdersService,
    private readonly jwtService: JwtService,
  ) {}

  handleConnection(client: Socket, ...args: any[]) {
    const token = client.handshake.auth.token;

    if (token) {
      try {
        const { role } = this.jwtService.verify(token);
        if (role > 1) {
          client.join('ADV_USERS');
        }
      } catch {}
    }
  }

  @SubscribeMessage('createOrder')
  async create(
    @MessageBody() createOrderDto: CreateOrderDto,
    @ConnectedSocket() socket: Socket,
  ) {
    const order = await this.ordersService.create(createOrderDto);
    this.server.to('ADV_USERS').emit('createOrder', order);
    socket.emit('createOrder', order.ticket);
  }

  @SubscribeMessage('findAllOrders')
  @Roles(UserRole.ADV_USER)
  @UseGuards(AuthGuard)
  async findAll(@ConnectedSocket() client: Socket) {
    const payload = await this.ordersService.findAll();
    client.emit('findAllOrders', payload);
  }

  @UseGuards(AuthGuard)
  @Roles(UserRole.ADV_USER)
  @SubscribeMessage('findOneOrder')
  findOne(@MessageBody() id: number) {
    return this.ordersService.findOne(id);
  }

  @UseGuards(AuthGuard)
  @Roles(UserRole.ADV_USER)
  @SubscribeMessage('updateOrder')
  async update(@MessageBody() { id, status }: UpdateOrderDto) {
    const payload = await this.ordersService.update(id, status);
    this.server.to('ADV_USERS').emit('updateOrder', payload);
  }

  @UseGuards(AuthGuard)
  @Roles(UserRole.ADV_USER)
  @SubscribeMessage('removeOrder')
  async remove(@MessageBody() id: number) {
    const payload = await this.ordersService.remove(id);
    this.server.to('ADV_USERS').emit('removeOrder', payload);
  }
}
