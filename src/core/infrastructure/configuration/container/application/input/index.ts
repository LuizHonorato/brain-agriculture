import CreateFarmInputPort from '@/core/application/ports/input/create-farm.input-port';
import CreateHarvestInputPort from '@/core/application/ports/input/create-harvest.input-port';
import CreatePlantationInputPort from '@/core/application/ports/input/create-plantation.input-port';
import CreateRuralProducerInputPort from '@/core/application/ports/input/create-rural-producer.input-port';
import DeleteFarmInputPort from '@/core/application/ports/input/delete-farm.input-port';
import DeleteHarvestInputPort from '@/core/application/ports/input/delete-harvest.input-port';
import DeletePlantationInputPort from '@/core/application/ports/input/delete-plantation.input-port';
import DeleteRuralProducerInputPort from '@/core/application/ports/input/delete-rural-producer.input-port';
import FindAllRuralProducersInputPort from '@/core/application/ports/input/find-all-rural-producers.input-port';
import FindRuralProducerByIdInputPort from '@/core/application/ports/input/find-rural-producer-by-id.input-port';
import UpdateRuralProducerInputPort from '@/core/application/ports/input/update-rural-producer.input-port';
import CreateFarmUseCase from '@/core/application/use-cases/create-farm.use-case';
import CreateHarvestUseCase from '@/core/application/use-cases/create-harvest.use-case';
import CreatePlantationUseCase from '@/core/application/use-cases/create-plantation.use-case';
import CreateRuralProducerUseCase from '@/core/application/use-cases/create-rural-producer.use-case';
import DeleteFarmUseCase from '@/core/application/use-cases/delete-farm.use-case';
import DeleteHarvestUseCase from '@/core/application/use-cases/delete-harvest.use-case';
import DeletePlantationUseCase from '@/core/application/use-cases/delete-plantation.use-case';
import DeleteRuralProducerUseCase from '@/core/application/use-cases/delete-rural-producer.use-case';
import FindAllRuralProducersUseCase from '@/core/application/use-cases/find-all-rural-producers.use-case';
import FindRuralProducerByIdUseCase from '@/core/application/use-cases/find-rural-producer-by-id.use-case';
import UpdateRuralProducerUseCase from '@/core/application/use-cases/update-rural-producer.use-case';
import { container } from 'tsyringe';

container.registerSingleton<CreateRuralProducerInputPort>(
  'CreateRuralProducerInputPort',
  CreateRuralProducerUseCase,
);

container.registerSingleton<UpdateRuralProducerInputPort>(
  'UpdateRuralProducerInputPort',
  UpdateRuralProducerUseCase,
);

container.registerSingleton<DeleteRuralProducerInputPort>(
  'DeleteRuralProducerInputPort',
  DeleteRuralProducerUseCase,
);

container.registerSingleton<CreateFarmInputPort>(
  'CreateFarmInputPort',
  CreateFarmUseCase,
);

container.registerSingleton<DeleteFarmInputPort>(
  'DeleteFarmInputPort',
  DeleteFarmUseCase,
);

container.registerSingleton<CreateHarvestInputPort>(
  'CreateHarvestInputPort',
  CreateHarvestUseCase,
);

container.registerSingleton<DeleteHarvestInputPort>(
  'DeleteHarvestInputPort',
  DeleteHarvestUseCase,
);

container.registerSingleton<CreatePlantationInputPort>(
  'CreatePlantationInputPort',
  CreatePlantationUseCase,
);

container.registerSingleton<DeletePlantationInputPort>(
  'DeletePlantationInputPort',
  DeletePlantationUseCase,
);

container.registerSingleton<FindRuralProducerByIdInputPort>(
  'FindRuralProducerByIdInputPort',
  FindRuralProducerByIdUseCase,
);

container.registerSingleton<FindAllRuralProducersInputPort>(
  'FindAllRuralProducersInputPort',
  FindAllRuralProducersUseCase,
);
