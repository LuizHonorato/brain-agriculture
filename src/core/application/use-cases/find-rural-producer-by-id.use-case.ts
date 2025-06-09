import { inject, injectable } from 'tsyringe';
import { DefaultResponse } from '../dtos/default-response.dto';
import FindRuralProducerByIdInputPort from '../ports/input/find-rural-producer-by-id.input-port';
import RuralProducerOutputPort from '../ports/output/rural-producer.output-port';
import NotFoundException from '@/core/shared/domain/exceptions/not-found.exception';

@injectable()
export default class FindRuralProducerByIdUseCase
  implements FindRuralProducerByIdInputPort
{
  constructor(
    @inject('RuralProducerOutputPort')
    private readonly ruralProducerOutputPort: RuralProducerOutputPort,
  ) {}

  async execute(id: string): Promise<DefaultResponse> {
    const ruralProducer = await this.ruralProducerOutputPort.findById(id);

    if (!ruralProducer) {
      throw new NotFoundException(`Rural producer with id ${id} not found`);
    }

    return new DefaultResponse(true, ruralProducer.toJSON());
  }
}
