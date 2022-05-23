import { Injectable } from '@nestjs/common';
import { CreateTableDto } from './dto/create-table.dto';
import { Table } from './entities/table.entity';

@Injectable()
export class TableService {
  tables: Table[] = [];

  findAll() {
    return this.tables;
  }

  create(createTableDto: CreateTableDto) {
    const table: Table = {
      ...createTableDto,
      number: 0
    };

    this.tables.push(table);

    return table;
  }
}