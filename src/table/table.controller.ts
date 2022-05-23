import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTableDto } from './dto/create-table.dto';
import { TableService } from './table.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller()
export class TableController {
  constructor(private tableService: TableService) {}

  @Get('findAll')
  findAll() {
    return this.tableService.findAll();
  }

  @Post('create')
  create(@Body() createTableDto: CreateTableDto) {
    return this.tableService.create(createTableDto);
  }
}