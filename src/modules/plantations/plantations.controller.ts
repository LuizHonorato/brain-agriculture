import {
  Controller,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  Delete,
  Param,
} from '@nestjs/common';
import { CreatePlantationDto } from './dtos/create-plantation.dto';
import { container } from 'tsyringe';
import CreatePlantationInputPort from '@/core/application/ports/input/create-plantation.input-port';
import DeletePlantationInputPort from '@/core/application/ports/input/delete-plantation.input-port';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('plantations')
export class PlantationsController {
  @Post()
  @ApiTags('Plantations')
  @ApiOperation({
    summary: 'Create Plantation',
    description: 'This endpoint is used to create a plantation.',
  })
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createPlantationDto: CreatePlantationDto) {
    const { name, harvest_id } = createPlantationDto;

    const usecase: CreatePlantationInputPort = container.resolve(
      'CreatePlantationInputPort',
    );

    return usecase.execute({
      name,
      harvestId: harvest_id,
    });
  }

  @Delete(':id')
  @ApiTags('Plantations')
  @ApiOperation({
    summary: 'Delete Plantation',
    description: 'This endpoint is used to delete a plantation by its ID.',
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: string) {
    const usecase: DeletePlantationInputPort = container.resolve(
      'DeletePlantationInputPort',
    );

    await usecase.execute(id);
  }
}
