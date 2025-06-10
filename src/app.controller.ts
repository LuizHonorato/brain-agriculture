import { Controller, Get } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';

@Controller()
export class AppController {
  @Get('/health')
  @ApiOperation({
    summary: 'Health Check',
    description:
      'This endpoint is used to check the health of the application.',
  })
  getHealth(): string {
    return 'Ok!';
  }
}
