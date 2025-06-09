import CreateHarvestDTO from '../../dtos/create-harvest.dto';
import { DefaultResponse } from '../../dtos/default-response.dto';

export default interface CreateHarvestInputPort {
  execute(input: CreateHarvestDTO): Promise<DefaultResponse>;
}
