import {
  Controller,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  Patch,
  Param,
  Delete,
  Get,
  Query,
} from '@nestjs/common';
import { CreateRuralProducerDto } from './dtos/create-rural-producer.dto';
import { UpdateRuralProducerDto } from './dtos/update-rural-producer.dto';
import CreateRuralProducerInputPort from '@/core/application/ports/input/create-rural-producer.input-port';
import { container } from 'tsyringe';
import UpdateRuralProducerInputPort from '@/core/application/ports/input/update-rural-producer.input-port';
import DeleteRuralProducerInputPort from '@/core/application/ports/input/delete-rural-producer.input-port';
import FindRuralProducerByIdInputPort from '@/core/application/ports/input/find-rural-producer-by-id.input-port';
import { QueryParamsDto } from './dtos/query-params.dto';
import FindAllRuralProducersInputPort from '@/core/application/ports/input/find-all-rural-producers.input-port';
import CreateRuralProducerDocumentation from './documentation/create-rural-producer.documentation';
import FindAllProducersDocumentation from './documentation/find-all-producers.documentation';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import UpdateRuralProducerDocumentation from './documentation/update-rural-producer.documentation';

@Controller('rural-producers')
export class RuralProducersController {
  @Get()
  @FindAllProducersDocumentation()
  @HttpCode(HttpStatus.OK)
  async findAll(@Query() query: QueryParamsDto) {
    const usecase: FindAllRuralProducersInputPort = container.resolve(
      'FindAllRuralProducersInputPort',
    );

    const { column, skip, take, order, search } = query;

    return usecase.execute({
      column,
      skip: Number(skip),
      take: Number(take),
      order,
      search,
    });
  }

  @Post()
  @CreateRuralProducerDocumentation()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createRuralProducerDto: CreateRuralProducerDto) {
    const usecase: CreateRuralProducerInputPort = container.resolve(
      'CreateRuralProducerInputPort',
    );

    const { name, document } = createRuralProducerDto;

    return usecase.execute({ name, document });
  }

  @Get(':id')
  @ApiTags('Rural Producers')
  @ApiOperation({
    summary: 'Find Rural Producer by ID',
    description: 'This endpoint retrieves a rural producer by their ID.',
  })
  @HttpCode(HttpStatus.OK)
  async findById(@Param('id') id: string) {
    const usecase: FindRuralProducerByIdInputPort = container.resolve(
      'FindRuralProducerByIdInputPort',
    );

    return usecase.execute(id);
  }

  @Patch(':id')
  @UpdateRuralProducerDocumentation()
  @HttpCode(HttpStatus.OK)
  async update(
    @Param('id') id: string,
    @Body() updateRuralProducerDto: UpdateRuralProducerDto,
  ) {
    const usecase: UpdateRuralProducerInputPort = container.resolve(
      'UpdateRuralProducerInputPort',
    );

    const { name, document } = updateRuralProducerDto;

    return usecase.execute({ id, name, document });
  }

  @Delete(':id')
  @ApiTags('Rural Producers')
  @ApiOperation({
    summary: 'Delete Rural Producer',
    description: 'This endpoint deletes a rural producer by their ID.',
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: string) {
    const usecase: DeleteRuralProducerInputPort = container.resolve(
      'DeleteRuralProducerInputPort',
    );

    await usecase.execute(id);
  }
}
