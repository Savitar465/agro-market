import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { IUserRepository } from './users.repository.interface';

@Injectable()
export class UsersRepository implements IUserRepository {
  private readonly users: User[] = [];
  private nextId = 1;

  create(dto: CreateUserDto): User {
    const user: User = { id: this.nextId++, ...dto };
    this.users.push(user);
    return user;
  }

  findAll(): User[] {
    return [...this.users];
  }

  findOne(id: number): User {
    const user = this.users.find((u) => u.id === id);
    if (!user) throw new NotFoundException(`User ${id} not found`);
    return user;
  }

  update(id: number, dto: UpdateUserDto): User {
    const user = this.findOne(id);
    Object.assign(user, dto);
    return user;
  }

  remove(id: number): void {
    const idx = this.users.findIndex((u) => u.id === id);
    if (idx === -1) throw new NotFoundException(`User ${id} not found`);
    this.users.splice(idx, 1);
  }
}
