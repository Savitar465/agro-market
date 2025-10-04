import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../entities/user.entity';

import { USERS_REPOSITORY } from '../../common/tokens';
import { IUserRepository } from '../repositories/users.repository.interface';
import { IUsersService } from './users.service.interface';

@Injectable()
export class UsersService implements IUsersService {
  constructor(
    @Inject(USERS_REPOSITORY)
    private readonly repo: IUserRepository,
  ) {}

  async create(dto: CreateUserDto): Promise<User> {
    return await this.repo.create(dto);
  }

  async findAll(): Promise<User[]> {
    return this.repo.findAll();
  }

  async findOne(id: string): Promise<User> {
    return this.repo.findOne(id);
  }

  async update(id: string, dto: UpdateUserDto): Promise<User> {
    return this.repo.update(id, dto);
  }

  async remove(id: string): Promise<void> {
    return this.repo.remove(id);
  }
}
