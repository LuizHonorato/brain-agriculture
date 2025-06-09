import CreateFarmDTO from '../../dtos/create-farm.dto';
import { DefaultResponse } from '../../dtos/default-response.dto';

export default interface CreateFarmInputPort {
  execute(input: CreateFarmDTO): Promise<DefaultResponse>;
}
