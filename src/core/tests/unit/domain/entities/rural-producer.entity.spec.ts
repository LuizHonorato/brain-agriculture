import RuralProducer from '@/core/domain/entities/rural-producer.entity';
import { RuralProducerPersonType } from '@prisma/client';

describe('RuralProducer', () => {
  it('should create a natural person rural producer with valid data', () => {
    const ruralProducer = new RuralProducer({
      name: 'John Doe',
      document: '12345678901',
    });

    ruralProducer.defineRuralProductPersonType();

    expect(ruralProducer.name).toBe('John Doe');
    expect(ruralProducer.personType).toBe(
      RuralProducerPersonType.natural_person,
    );
  });

  it('should create a legal entity rural producer with valid data', () => {
    const ruralProducer = new RuralProducer({
      name: 'Jane Doe',
      document: '12345678901234',
    });

    ruralProducer.defineRuralProductPersonType();

    expect(ruralProducer.name).toBe('Jane Doe');
    expect(ruralProducer.personType).toBe(RuralProducerPersonType.legal_person);
  });

  it('should throw an error when creating a rural producer with invalid name', () => {
    expect(() => {
      new RuralProducer({
        name: null,
        document: '12345678901',
      });
    }).toThrow('Invalid name');
  });

  it('should throw an error when creating a rural producer with invalid document', () => {
    expect(() => {
      new RuralProducer({
        name: 'John Doe',
        document: 'invalid_document',
      });
    }).toThrow('Invalid document format');
  });
});
