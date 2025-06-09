import CreatePlantationDTO from '../../dtos/create-plantation.dto';
import { DefaultResponse } from '../../dtos/default-response.dto';

export default interface CreatePlantationInputPort {
  execute(input: CreatePlantationDTO): Promise<DefaultResponse>;
}
