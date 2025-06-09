import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateFarmDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Unique identifier for the rural producer',
    example: 'e5392ab0-9435-40f8-b142-d0838286d06b',
  })
  rural_producer_id: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Name of the farm',
    example: 'Sunny Acres Farm',
  })
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'City of the farm',
    example: 'Springfield',
  })
  city: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'State of the farm',
    example: 'Illinois',
  })
  state: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Total area of the farm in hectares',
    example: 150.5,
  })
  total_area: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Arable area of the farm in hectares',
    example: 100.0,
  })
  arable_area: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Vegetation area of the farm in hectares',
    example: 50.5,
  })
  vegetation_area: number;
}
