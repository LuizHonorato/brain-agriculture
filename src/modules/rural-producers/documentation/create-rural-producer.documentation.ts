import { applyDecorators } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateRuralProducerDto } from '../dtos/create-rural-producer.dto';

export default function CreateRuralProducerDocumentation(): ReturnType<
  typeof applyDecorators
> {
  return applyDecorators(
    ApiTags('Rural Producers'),
    ApiOperation({
      summary: 'Create Rural Producer',
      description: 'This endpoint is used to create a rural producer.',
    }),
    ApiBody({
      description: 'Rural Producer payload',
      required: true,
      type: CreateRuralProducerDto,
    }),
    ApiResponse({
      description: 'Rural Producer created successfully',
      status: 201,
    }),
    ApiResponse({
      description: 'Invalid request payload.',
      status: 400,
    }),
    ApiResponse({
      description: 'Internal server error.',
      status: 500,
    }),
  );
}
