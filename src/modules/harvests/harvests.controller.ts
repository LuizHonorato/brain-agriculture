import {
  Controller,
  Post,
  Body,
  Delete,
  HttpCode,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { CreateHarvestDto } from './dtos/create-harvest.dto';
import { container } from 'tsyringe';
import CreateHarvestInputPort from '@/core/application/ports/input/create-harvest.input-port';
import DeleteHarvestInputPort from '@/core/application/ports/input/delete-harvest.input-port';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('harvests')
export class HarvestsController {
  @Post()
  @ApiTags('Harvest')
  @ApiOperation({
    summary: 'Create Harvest',
    description: 'This endpoint is used to create a harvest.',
  })
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createHarvestDto: CreateHarvestDto) {
    const usecase: CreateHarvestInputPort = container.resolve(
      'CreateHarvestInputPort',
    );

    const input = {
      farmId: createHarvestDto.farm_id,
      name: createHarvestDto.name,
      year: createHarvestDto.year,
    };

    return usecase.execute(input);
  }

  @Delete(':id')
  @ApiTags('Harvest')
  @ApiOperation({
    summary: 'Delete Harvest',
    description: 'This endpoint is used to delete a harvest by its ID.',
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: string) {
    const usecase: DeleteHarvestInputPort = container.resolve(
      'DeleteHarvestInputPort',
    );

    await usecase.execute(id);
  }
}
