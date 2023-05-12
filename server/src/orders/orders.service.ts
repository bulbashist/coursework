import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';
import { Product } from 'src/products/entities/product.entity';

export interface IOrder {
  id: number;
  clientId: number | null;
  status: number;
  time?: string;
  products: [];
  ticket?: number;
}

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
  ) {}

  async create(createOrderDto: CreateOrderDto): Promise<IOrder> {
    const order = {
      id: 0,
      ticket: 3,
      ...createOrderDto,
    } as IOrder;

    const response = await this.orderRepository.save(createOrderDto);
    return response;
  }

  async findAll() {
    const data = await this.orderRepository.find();
    return data;
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  async update(id: number, status: number) {
    const resp = await this.orderRepository.save({ id, status });
    return { id, status };
  }

  async remove(id: number) {
    const order = await this.orderRepository.find({
      where: {
        id,
      },
    });
    await this.orderRepository.remove(order);
    return id;
  }
}
