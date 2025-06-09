import PaginatedDefaultResponse from '../../dtos/paginated-default-response.dto';
import QueryParamsDTO from '../../dtos/query-params.dto';

export default interface FindAllRuralProducersInputPort {
  execute(qyery: QueryParamsDTO): Promise<PaginatedDefaultResponse>;
}
