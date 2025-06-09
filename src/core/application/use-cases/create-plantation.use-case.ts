import { inject, injectable } from 'tsyringe';
import CreatePlantationDTO from '../dtos/create-plantation.dto';
import { DefaultResponse } from '../dtos/default-response.dto';
import PlantationOutputPort from '../ports/output/plantation.output-port';
import HarvestOutputPort from '../ports/output/harvest.output-port';
import CreatePlantationInputPort from '../ports/input/create-plantation.input-port';
import Plantation from '@/core/domain/entities/plantation.entity';
import NotFoundException from '@/core/shared/domain/exceptions/not-found.exception';

@injectable()
export default class CreatePlantationUseCase
  implements CreatePlantationInputPort
{
  constructor(
    @inject('PlantationOutputPort')
    private readonly plantationOutputPort: PlantationOutputPort,

    @inject('HarvestOutputPort')
    private readonly harvestOutputPort: HarvestOutputPort,
  ) {}

  async execute(input: CreatePlantationDTO): Promise<DefaultResponse> {
    const { harvestId, name } = input;

    const existingHarvest = await this.harvestOutputPort.findById(harvestId);

    if (!existingHarvest) {
      throw new NotFoundException(`Harvest with ID ${harvestId} not found`);
    }

    const plantation = new Plantation({
      harvestId: harvestId,
      name: name,
    });

    await this.plantationOutputPort.create(plantation);

    return new DefaultResponse(true, plantation.toJSON());
  }
}
