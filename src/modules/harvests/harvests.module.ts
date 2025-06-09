import { Module } from '@nestjs/common';
import { HarvestsController } from './harvests.controller';

@Module({
  controllers: [HarvestsController],
  providers: [],
})
export class HarvestsModule {}
