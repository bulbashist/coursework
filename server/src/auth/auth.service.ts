import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(login: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(login);
    if (user?.password !== password) {
      throw new UnauthorizedException();
    }

    return {
      id: user.id,
      accessToken: this.jwtService.sign({ login, role: user.roleId }),
    };
  }

  async signUp(login: string, password: string) {
    const res = await this.usersService.create(login, password);
    if (!res) return null;

    return this.signIn(login, password);
  }
}
