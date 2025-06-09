import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreatePlantationDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Plantation name',
    example: 'Corn',
  })
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Unique identifier for the harvest',
    example: 'e5392ab0-9435-40f8-b142-d0838286d06b',
  })
  harvest_id: string;
}
