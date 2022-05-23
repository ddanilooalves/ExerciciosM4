import { Injectable } from '@nestjs/common';
import { CreateTableDto } from './dto/create-table.dto';
import { User } from './entities/table.entity';

@Injectable()
export class TableService {
  users: User[] = [];

  findAll() {
    return this.users;
  }

  create(createTableDto: CreateTableDto) {
    const user: User = {
      ...createTableDto,
      number: 0
    };

    this.users.push(user);

    return user;
  }
}