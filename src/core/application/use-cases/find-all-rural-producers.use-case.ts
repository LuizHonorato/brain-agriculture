import PaginatedDefaultResponse from '../dtos/paginated-default-response.dto';
import QueryParamsDto from '../dtos/query-params.dto';
import FindAllRuralProducersInputPort from '../ports/input/find-all-rural-producers.input-port';
import RuralProducerOutputPort from '../ports/output/rural-producer.output-port';
import { inject, injectable } from 'tsyringe';

@injectable()
export default class FindAllRuralProducersUseCase
  implements FindAllRuralProducersInputPort
{
  constructor(
    @inject('RuralProducerOutputPort')
    private readonly ruralProducerOutputPort: RuralProducerOutputPort,
  ) {}

  async execute(query: QueryParamsDto): Promise<PaginatedDefaultResponse> {
    const { count, list, total } =
      await this.ruralProducerOutputPort.findAll(query);

    const paginatedRuralProducers = list.map(ruralProducer =>
      ruralProducer.toJSON(),
    );

    return new PaginatedDefaultResponse({
      data: paginatedRuralProducers,
      count,
      total,
      success: true,
    });
  }
}
