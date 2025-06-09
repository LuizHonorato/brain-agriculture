import { DefaultResponse } from '../../dtos/default-response.dto';

export default interface FindRuralProducerByIdInputPort {
  execute(id: string): Promise<DefaultResponse>;
}
