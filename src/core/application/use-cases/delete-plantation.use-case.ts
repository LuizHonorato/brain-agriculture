import { inject, injectable } from 'tsyringe';
import NotFoundException from '@/core/shared/domain/exceptions/not-found.exception';
import DeletePlantationInputPort from '../ports/input/delete-plantation.input-port';
import PlantationOutputPort from '../ports/output/plantation.output-port';

@injectable()
export default class DeletePlantationUseCase
  implements DeletePlantationInputPort
{
  constructor(
    @inject('PlantationOutputPort')
    private readonly plantationOutputPort: PlantationOutputPort,
  ) {}

  async execute(id: string): Promise<void> {
    const existingPlantation = await this.plantationOutputPort.findById(id);

    if (!existingPlantation) {
      throw new NotFoundException(`Plantation with id ${id} not found.`);
    }

    await this.plantationOutputPort.delete(id);
  }
}
