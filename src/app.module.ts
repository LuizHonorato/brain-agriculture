import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { RuralProducersModule } from './modules/rural-producers/rural-producers.module';
import { FarmsModule } from './modules/farms/farms.module';
import { HarvestsModule } from './modules/harvests/harvests.module';
import { PlantationsModule } from './modules/plantations/plantations.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    RuralProducersModule,
    FarmsModule,
    HarvestsModule,
    PlantationsModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
