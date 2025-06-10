import { Test, TestingModule } from '@nestjs/testing';
import { RuralProducersController } from './rural-producers.controller';

describe('RuralProducersController', () => {
  let controller: RuralProducersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RuralProducersController],
      providers: [],
    }).compile();

    controller = module.get<RuralProducersController>(RuralProducersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
