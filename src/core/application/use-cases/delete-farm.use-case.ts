import { inject, injectable } from 'tsyringe';
import NotFoundException from '@/core/shared/domain/exceptions/not-found.exception';
import DeleteFarmInputPort from '../ports/input/delete-farm.input-port';
import FarmOutputPort from '../ports/output/farm.output-port';

@injectable()
export default class DeleteFarmUseCase implements DeleteFarmInputPort {
  constructor(
    @inject('FarmOutputPort')
    private readonly farmOutputPort: FarmOutputPort,
  ) {}

  async execute(id: string): Promise<void> {
    const existingFarm = await this.farmOutputPort.findById(id);

    if (!existingFarm) {
      throw new NotFoundException(`Farm with id ${id} not found.`);
    }

    await this.farmOutputPort.delete(id);
  }
}
