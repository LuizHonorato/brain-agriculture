import { inject, injectable } from 'tsyringe';
import NotFoundException from '@/core/shared/domain/exceptions/not-found.exception';
import DeleteHarvestInputPort from '../ports/input/delete-harvest.input-port';
import HarvestOutputPort from '../ports/output/harvest.output-port';

@injectable()
export default class DeleteHarvestUseCase implements DeleteHarvestInputPort {
  constructor(
    @inject('HarvestOutputPort')
    private readonly harvestOutputPort: HarvestOutputPort,
  ) {}

  async execute(id: string): Promise<void> {
    const existingHarvest = await this.harvestOutputPort.findById(id);

    if (!existingHarvest) {
      throw new NotFoundException(`Harvest with id ${id} not found.`);
    }

    await this.harvestOutputPort.delete(id);
  }
}
