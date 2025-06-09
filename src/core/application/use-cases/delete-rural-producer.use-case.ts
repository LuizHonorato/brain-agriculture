import RuralProducerOutputPort from '@/core/application/ports/output/rural-producer.output-port';
import { inject, injectable } from 'tsyringe';
import DeleteRuralProducerInputPort from '../ports/input/delete-rural-producer.input-port';
import NotFoundException from '@/core/shared/domain/exceptions/not-found.exception';

@injectable()
export default class DeleteRuralProducerUseCase
  implements DeleteRuralProducerInputPort
{
  constructor(
    @inject('RuralProducerOutputPort')
    private readonly ruralProductOutputPort: RuralProducerOutputPort,
  ) {}

  async execute(id: string): Promise<void> {
    const existingProducer = await this.ruralProductOutputPort.findById(id);

    if (!existingProducer) {
      throw new NotFoundException(`Rural producer with id ${id} not found.`);
    }

    await this.ruralProductOutputPort.delete(id);
  }
}
