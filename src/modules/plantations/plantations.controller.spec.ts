import { Test, TestingModule } from '@nestjs/testing';
import { PlantationsController } from './plantations.controller';
import { PlantationsService } from './plantations.service';

describe('PlantationsController', () => {
  let controller: PlantationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlantationsController],
      providers: [PlantationsService],
    }).compile();

    controller = module.get<PlantationsController>(PlantationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
