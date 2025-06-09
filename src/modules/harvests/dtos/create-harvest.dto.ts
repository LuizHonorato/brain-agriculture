import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateHarvestDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Harvest name',
    example: 'Wheat Harvest 2023',
  })
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Unique identifier for the harvest',
    example: 'e5392ab0-9435-40f8-b142-d0838286d06b',
  })
  farm_id: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Year of the harvest',
    example: 2023,
  })
  year: number;
}
