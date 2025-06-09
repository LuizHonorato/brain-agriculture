import CreateFarmDTO from '@/core/application/dtos/create-farm.dto';
import Farm from '../entities/farm.entity';

export default class FarmFactory {
  static create(input: CreateFarmDTO): Farm {
    const {
      name,
      arableArea,
      city,
      ruralProducerId,
      state,
      totalArea,
      vegetationArea,
    } = input;

    return new Farm({
      name,
      arableArea,
      city,
      ruralProducerId,
      state,
      totalArea,
      vegetationArea,
    });
  }
}
