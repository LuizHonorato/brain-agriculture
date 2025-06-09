import RuralProducerOutputPort from '@/core/application/ports/output/rural-producer.output-port';

export default class RuralProducerOutputPortMock
  implements RuralProducerOutputPort
{
  findAll = jest.fn();
  findById = jest.fn();
  findByDocument = jest.fn();
  create = jest.fn();
  update = jest.fn();
  delete = jest.fn();
}
