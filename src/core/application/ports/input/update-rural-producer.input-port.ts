import { DefaultResponse } from '../../dtos/default-response.dto';
import UpdateRuralProductDTO from '../../dtos/update-rural-product.dto';

export default interface UpdateRuralProducerInputPort {
  execute(input: UpdateRuralProductDTO): Promise<DefaultResponse>;
}
