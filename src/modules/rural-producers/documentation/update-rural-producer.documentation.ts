import { applyDecorators } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UpdateRuralProducerDto } from '../dtos/update-rural-producer.dto';

export default function UpdateRuralProducerDocumentation(): ReturnType<
  typeof applyDecorators
> {
  return applyDecorators(
    ApiTags('Rural Producers'),
    ApiOperation({
      summary: 'Update Rural Producer',
      description: 'This endpoint is used to update a rural producer.',
    }),
    ApiBody({
      description: 'Rural Producer payload',
      required: true,
      type: UpdateRuralProducerDto,
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
