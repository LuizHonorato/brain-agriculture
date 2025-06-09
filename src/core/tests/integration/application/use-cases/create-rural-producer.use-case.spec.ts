import CreateRuralProducerUseCase from '@/core/application/use-cases/create-rural-producer.use-case';
import RuralProducerOutputPortMock from '@/core/tests/mocks/rural-producer.output-port.mock';

describe('CreateRuralProducerUseCase', () => {
  let createRuralProducerUseCase: CreateRuralProducerUseCase;
  let ruralProducerOutputPort: RuralProducerOutputPortMock;

  beforeEach(() => {
    ruralProducerOutputPort = new RuralProducerOutputPortMock();

    createRuralProducerUseCase = new CreateRuralProducerUseCase(
      ruralProducerOutputPort,
    );
  });

  it('should create a rural producer with valid data', async () => {
    const input = {
      name: 'John Doe',
      document: '12345678901',
    };

    ruralProducerOutputPort.findByDocument.mockResolvedValue(null);

    const response = await createRuralProducerUseCase.execute(input);

    expect(response.success).toBe(true);
    expect(response.data.name).toBe(input.name);
    expect(ruralProducerOutputPort.create).toHaveBeenCalled();
  });

  it('should throw an error when creating a rural producer with existing document', async () => {
    const input = {
      name: 'Jane Doe',
      document: '12345678901',
    };

    ruralProducerOutputPort.findByDocument.mockResolvedValue({
      name: 'Jane Doe',
      document: '12345678901',
    });

    await expect(createRuralProducerUseCase.execute(input)).rejects.toThrow(
      'Rural producer with document 12345678901 already exists.',
    );

    expect(ruralProducerOutputPort.create).not.toHaveBeenCalled();
  });
});
