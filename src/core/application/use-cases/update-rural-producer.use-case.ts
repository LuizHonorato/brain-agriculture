import { inject, injectable } from 'tsyringe';
import UpdateRuralProductDTO from '../dtos/update-rural-product.dto';
import UpdateRuralProducerInputPort from '../ports/input/update-rural-producer.input-port';
import RuralProducerOutputPort from '../ports/output/rural-producer.output-port';
import { NotFoundException } from '@nestjs/common';
import { DefaultResponse } from '../dtos/default-response.dto';
import BadRequestException from '@/core/shared/domain/exceptions/bad-request.exception';

@injectable()
export default class UpdateRuralProducerUseCase
  implements UpdateRuralProducerInputPort
{
  constructor(
    @inject('RuralProducerOutputPort')
    private readonly ruralProductOutputPort: RuralProducerOutputPort,
  ) {}

  async execute(input: UpdateRuralProductDTO): Promise<DefaultResponse> {
    const { document, id, name } = input;

    const existingProducer = await this.ruralProductOutputPort.findById(id);

    if (!existingProducer) {
      throw new NotFoundException(
        `Rural producer with id ${id} does not exist.`,
      );
    }

    const existingProducerByDocument =
      await this.ruralProductOutputPort.findByDocument(document);

    if (existingProducerByDocument && existingProducerByDocument.id !== id) {
      throw new BadRequestException(
        `Rural producer with document ${document} already exists.`,
      );
    }

    existingProducer.name = name;
    existingProducer.document = document;

    await this.ruralProductOutputPort.update(existingProducer);

    return new DefaultResponse(true, existingProducer.toJSON());
  }
}
