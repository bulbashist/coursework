import {
  Controller,
  Get,
  Post,
  Body,
  HttpCode,
  BadRequestException,
} from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(200)
  @Post('signin')
  async signIn(@Body() signInDto: Record<string, any>) {
    return await this.authService.signIn(signInDto.login, signInDto.password);
  }

  @HttpCode(200)
  @Post('signup')
  async signUp(@Body() { login, password }: any) {
    const res = await this.authService.signUp(login, password);

    if (!res) throw new BadRequestException('Same login');
    return res;
  }
}
