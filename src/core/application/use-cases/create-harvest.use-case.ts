import { inject, injectable } from 'tsyringe';
import CreateHarvestDTO from '../dtos/create-harvest.dto';
import { DefaultResponse } from '../dtos/default-response.dto';
import CreateHarvestInputPort from '../ports/input/create-harvest.input-port';
import HarvestOutputPort from '../ports/output/harvest.output-port';
import Harvest from '@/core/domain/entities/harvest.entity';
import FarmOutputPort from '../ports/output/farm.output-port';
import NotFoundException from '@/core/shared/domain/exceptions/not-found.exception';

@injectable()
export default class CreateHarvestUseCase implements CreateHarvestInputPort {
  constructor(
    @inject('HarvestOutputPort')
    private readonly harvestOutputPort: HarvestOutputPort,

    @inject('FarmOutputPort')
    private readonly farmOutputPort: FarmOutputPort,
  ) {}

  async execute(input: CreateHarvestDTO): Promise<DefaultResponse> {
    const { farmId, name, year } = input;

    const existingFarm = await this.farmOutputPort.findById(farmId);

    if (!existingFarm) {
      throw new NotFoundException(`Farm with ID ${farmId} not found.`);
    }

    const harvest = new Harvest({
      farmId,
      name,
      year,
    });

    await this.harvestOutputPort.create(harvest);

    return new DefaultResponse(true, harvest.toJSON());
  }
}
