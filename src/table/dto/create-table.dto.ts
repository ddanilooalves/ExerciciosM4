import { IsNumber, IsPositive, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTableDto {
  @IsString()
  @ApiProperty({
    description: 'O nome de usuário',
    example: "random_id",
  })
  id: string;
}