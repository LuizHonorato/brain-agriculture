import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class QueryParamsDto {
  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'Search term for filtering results',
    required: false,
    example: 'John Doe',
  })
  search?: string;

  @IsString()
  @ApiProperty({
    description: 'Column to sort by',
    example: 'name',
  })
  column: string;

  @IsString()
  @ApiProperty({
    description: 'Order of sorting, either ASC or DESC',
    example: 'ASC',
  })
  order?: 'ASC' | 'DESC';

  @IsString()
  @ApiProperty({
    description: 'Number of records to skip for pagination',
    example: '0',
  })
  skip: string;

  @IsString()
  @ApiProperty({
    description: 'Number of records to take for pagination',
    example: '10',
  })
  take: string;
}
