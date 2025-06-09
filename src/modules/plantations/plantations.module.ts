import { Module } from '@nestjs/common';
import { PlantationsController } from './plantations.controller';

@Module({
  controllers: [PlantationsController],
  providers: [],
})
export class PlantationsModule {}
