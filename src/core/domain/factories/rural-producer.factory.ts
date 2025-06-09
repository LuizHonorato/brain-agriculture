import CreateRuralProductDTO from '@/core/application/dtos/create-rural-product.dto';
import RuralProducer from '../entities/rural-producer.entity';

export default class RuralProducerFactory {
  static create(input: CreateRuralProductDTO): RuralProducer {
    const { name, document } = input;

    const ruralProducer = new RuralProducer({
      name,
      document,
    });

    ruralProducer.defineRuralProductPersonType();

    return ruralProducer;
  }
}
