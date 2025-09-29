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

  create(dto: CreateUserDto): User {
    return this.repo.create(dto);
  }

  findAll(): User[] {
    return this.repo.findAll();
  }

  findOne(id: number): User {
    return this.repo.findOne(id);
  }

  update(id: number, dto: UpdateUserDto): User {
    return this.repo.update(id, dto);
  }

  remove(id: number): void {
    return this.repo.remove(id);
  }
}
