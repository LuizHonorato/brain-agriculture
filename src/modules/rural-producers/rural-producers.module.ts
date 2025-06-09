import { Module } from '@nestjs/common';
import { RuralProducersController } from './rural-producers.controller';

@Module({
  controllers: [RuralProducersController],
  providers: [],
})
export class RuralProducersModule {}
