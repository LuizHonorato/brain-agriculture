import { Test, TestingModule } from '@nestjs/testing';
import { PlantationsController } from './plantations.controller';

describe('PlantationsController', () => {
  let controller: PlantationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlantationsController],
      providers: [],
    }).compile();

    controller = module.get<PlantationsController>(PlantationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
