import {
  Body,
  Controller,
  Delete,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { CreateFarmDto } from './dtos/create-farm.dto';
import CreateFarmInputPort from '@/core/application/ports/input/create-farm.input-port';
import { container } from 'tsyringe';
import DeleteFarmInputPort from '@/core/application/ports/input/delete-farm.input-port';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('farms')
export class FarmsController {
  @Post()
  @ApiTags('Farms')
  @ApiOperation({
    summary: 'Create Farm',
    description: 'This endpoint is used to create a farm.',
  })
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createFarmDto: CreateFarmDto) {
    const usecase: CreateFarmInputPort = container.resolve(
      'CreateFarmInputPort',
    );

    const {
      name,
      arable_area,
      city,
      rural_producer_id,
      state,
      total_area,
      vegetation_area,
    } = createFarmDto;

    return usecase.execute({
      name,
      arableArea: arable_area,
      city,
      ruralProducerId: rural_producer_id,
      state,
      totalArea: total_area,
      vegetationArea: vegetation_area,
    });
  }

  @Delete(':id')
  @ApiTags('Farms')
  @ApiOperation({
    summary: 'Delete Farm',
    description: 'This endpoint is used to delete a farm by its ID.',
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: string) {
    const usecase: DeleteFarmInputPort = container.resolve(
      'DeleteFarmInputPort',
    );

    await usecase.execute(id);
  }
}
