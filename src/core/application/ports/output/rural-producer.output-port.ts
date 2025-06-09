import RuralProducer from '@/core/domain/entities/rural-producer.entity';
import QueryParamsDto from '../../dtos/query-params.dto';
import PaginatedRepositoryDto from '../../dtos/paginated-repository.dto';

export default interface RuralProducerOutputPort {
  findAll(
    query: QueryParamsDto,
  ): Promise<PaginatedRepositoryDto<RuralProducer>>;
  findById(id: string): Promise<RuralProducer | null>;
  findByDocument(document: string): Promise<RuralProducer | null>;
  create(entity: RuralProducer): Promise<void>;
  update(entity: RuralProducer): Promise<void>;
  delete(id: string): Promise<void>;
}
