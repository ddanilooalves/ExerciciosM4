import { Injectable } from '@nestjs/common';
import { CreateTableDto } from './dto/create-table.dto';
import { Users } from './entities/table.entity';

@Injectable()
export class TableService {
  users: Users[] = [];

  findAll() {
    return this.users;
  }

  create(createTableDto: CreateTableDto) {
    const user: Users = {
      ...createTableDto,
      number: 0
    };

    this.users.push(user);

    return user;
  }
}