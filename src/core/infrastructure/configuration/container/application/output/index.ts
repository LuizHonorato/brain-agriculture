import FarmOutputPort from '@/core/application/ports/output/farm.output-port';
import HarvestOutputPort from '@/core/application/ports/output/harvest.output-port';
import PlantationOutputPort from '@/core/application/ports/output/plantation.output-port';
import RuralProducerOutputPort from '@/core/application/ports/output/rural-producer.output-port';
import FarmPrismaRepository from '@/core/infrastructure/database/repositories/farm.prisma.repository';
import HarvestPrismaRepository from '@/core/infrastructure/database/repositories/harvest.prisma.repository';
import PlantationPrismaRepository from '@/core/infrastructure/database/repositories/plantation.prisma.repository';
import RuralProducerPrismaRepository from '@/core/infrastructure/database/repositories/rural-producer.prisma.repository';
import { container } from 'tsyringe';

container.registerSingleton<RuralProducerOutputPort>(
  'RuralProducerOutputPort',
  RuralProducerPrismaRepository,
);

container.registerSingleton<FarmOutputPort>(
  'FarmOutputPort',
  FarmPrismaRepository,
);

container.registerSingleton<HarvestOutputPort>(
  'HarvestOutputPort',
  HarvestPrismaRepository,
);

container.registerSingleton<PlantationOutputPort>(
  'PlantationOutputPort',
  PlantationPrismaRepository,
);
