import CreateRuralProductDTO from '../../dtos/create-rural-product.dto';
import { DefaultResponse } from '../../dtos/default-response.dto';

export default interface CreateRuralProducerInputPort {
  execute(input: CreateRuralProductDTO): Promise<DefaultResponse>;
}
