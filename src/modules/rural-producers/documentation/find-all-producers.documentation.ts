import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

export default function FindAllProducersDocumentation(): ReturnType<
  typeof applyDecorators
> {
  return applyDecorators(
    ApiTags('Rural Producers'),
    ApiOperation({
      summary: 'Find All Rural Producers',
      description: 'This endpoint is used to find all rural producers.',
    }),
  );
}
