import CreateRuralProducerInputPort from '@/core/application/ports/input/create-rural-producer.input-port';
import RuralProducerOutputPort from '@/core/application/ports/output/rural-producer.output-port';
import CreateRuralProductDTO from '../dtos/create-rural-product.dto';
import RuralProducerFactory from '@/core/domain/factories/rural-producer.factory';
import { inject, injectable } from 'tsyringe';
import BadRequestException from '@/core/shared/domain/exceptions/bad-request.exception';
import { DefaultResponse } from '../dtos/default-response.dto';

@injectable()
export default class CreateRuralProducerUseCase
  implements CreateRuralProducerInputPort
{
  constructor(
    @inject('RuralProducerOutputPort')
    private readonly ruralProductOutputPort: RuralProducerOutputPort,
  ) {}

  /**
   * Executes the use case to create a rural producer.
   * @param input - The input data for creating a rural producer.
   * @returns A promise that resolves when the rural producer is created.
   */
  async execute(input: CreateRuralProductDTO): Promise<DefaultResponse> {
    const { document } = input;

    const existingProducer =
      await this.ruralProductOutputPort.findByDocument(document);

    if (existingProducer) {
      throw new BadRequestException(
        `Rural producer with document ${document} already exists.`,
      );
    }

    const ruralProducer = RuralProducerFactory.create(input);

    await this.ruralProductOutputPort.create(ruralProducer);

    return new DefaultResponse(true, ruralProducer.toJSON());
  }
}
