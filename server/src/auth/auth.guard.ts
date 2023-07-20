import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Socket } from 'socket.io';
import { ROLES_KEY } from 'src/users/decorators/roles.decorators';
import { UserRole } from 'src/users/users.types';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService, private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<UserRole[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()],
    );

    if (!requiredRoles) {
      return true;
    }

    const client = context.switchToWs().getClient() as Socket;
    try {
      const payload = this.jwtService.verify(client.handshake.auth.token);
      return requiredRoles.some((role) => payload.role === role);
    } catch {
      return false;
    }
  }
}
