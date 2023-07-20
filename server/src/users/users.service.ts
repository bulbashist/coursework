import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/users.entity';
import { UserRole } from './users.types';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findOne(login: string): Promise<User | undefined> {
    return this.userRepository.findOne({
      where: {
        login,
      },
    });
  }

  async create(login: string, password: string) {
    const user = await this.findOne(login);

    if (user) return null;

    return this.userRepository.save({
      login,
      password,
      roleId: UserRole.USER,
    });
  }
}
