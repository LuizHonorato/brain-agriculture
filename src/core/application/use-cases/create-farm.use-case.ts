import { inject, injectable } from 'tsyringe';
import CreateFarmDTO from '../dtos/create-farm.dto';
import { DefaultResponse } from '../dtos/default-response.dto';
import CreateFarmInputPort from '../ports/input/create-farm.input-port';
import RuralProducerOutputPort from '../ports/output/rural-producer.output-port';
import FarmOutputPort from '../ports/output/farm.output-port';
import NotFoundException from '@/core/shared/domain/exceptions/not-found.exception';
import BadRequestException from '@/core/shared/domain/exceptions/bad-request.exception';
import FarmFactory from '@/core/domain/factories/farm.factory';

@injectable()
export default class CreateFarmUseCase implements CreateFarmInputPort {
  constructor(
    @inject('RuralProducerOutputPort')
    private readonly ruralProductOutputPort: RuralProducerOutputPort,

    @inject('FarmOutputPort')
    private readonly farmOutputPort: FarmOutputPort,
  ) {}

  /**
   * Executes the use case to create a farm.
   * @param input - The input data for creating a farm.
   * @returns A promise that resolves when the farm is created.
   */
  async execute(input: CreateFarmDTO): Promise<DefaultResponse> {
    const { ruralProducerId, totalArea, arableArea, vegetationArea } = input;

    const existingProducer =
      await this.ruralProductOutputPort.findById(ruralProducerId);

    if (!existingProducer) {
      throw new NotFoundException(
        `Rural producer with ID ${ruralProducerId} does not exist.`,
      );
    }

    if (totalArea <= 0) {
      throw new BadRequestException('Total area must be greater than zero.');
    }

    if (arableArea <= 0) {
      throw new BadRequestException('Arable area must be greater than zero.');
    }

    if (vegetationArea <= 0) {
      throw new BadRequestException(
        'Vegetation area must be greater than zero.',
      );
    }

    const totalAreaSum = arableArea + vegetationArea;

    if (totalAreaSum > totalArea) {
      throw new BadRequestException(
        'The sum of arable area and vegetation area cannot exceed total area.',
      );
    }

    const farm = FarmFactory.create(input);

    await this.farmOutputPort.create(farm);

    return new DefaultResponse(true, farm.toJSON());
  }
}
