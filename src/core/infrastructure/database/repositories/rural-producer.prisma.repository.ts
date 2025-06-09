import RuralProducerOutputPort from '@/core/application/ports/output/rural-producer.output-port';
import RuralProducer from '@/core/domain/entities/rural-producer.entity';
import prisma from '../prisma/client';
import { RuralProducerPersonType } from '@/core/domain/enums/rural-producer-person-type.enum';
import Farm from '@/core/domain/entities/farm.entity';
import Harvest from '@/core/domain/entities/harvest.entity';
import Plantation from '@/core/domain/entities/plantation.entity';
import QueryParamsDTO from '@/core/application/dtos/query-params.dto';
import PaginatedRepositoryDto from '@/core/application/dtos/paginated-repository.dto';

export default class RuralProducerPrismaRepository
  implements RuralProducerOutputPort
{
  async findAll(
    query: QueryParamsDTO,
  ): Promise<PaginatedRepositoryDto<RuralProducer>> {
    const { column, skip, take, order, search } = query;

    const total = await prisma.ruralProducer.count({
      where: search
        ? {
            OR: [
              {
                name: {
                  contains: String(search),
                  mode: 'insensitive',
                },
              },
            ],
          }
        : undefined,
    });

    const [count, ruralProducers] = await prisma.$transaction([
      prisma.ruralProducer.count({
        where: search
          ? {
              OR: [
                {
                  name: {
                    contains: String(search),
                    mode: 'insensitive',
                  },
                },
              ],
            }
          : undefined,
      }),
      prisma.ruralProducer.findMany({
        where: search
          ? {
              OR: [
                {
                  name: {
                    contains: String(search),
                    mode: 'insensitive',
                  },
                },
              ],
            }
          : undefined,
        skip: Number(skip),
        take: Number(take),
        orderBy: {
          [column]: order === 'ASC' ? 'asc' : 'desc',
        },
      }),
    ]);

    const listRuralProducers = ruralProducers.map(
      ruralProducer =>
        new RuralProducer({
          id: ruralProducer.id,
          name: ruralProducer.name,
          document: ruralProducer.document,
          personType: RuralProducerPersonType[ruralProducer.person_type],
          createdAt: ruralProducer.created_at,
          updatedAt: ruralProducer.updated_at,
        }),
    );

    return {
      total,
      count,
      list: listRuralProducers,
    };
  }

  async findById(id: string): Promise<RuralProducer | null> {
    const foundRuralProducer = await prisma.ruralProducer.findUnique({
      where: { id },
      include: {
        farms: {
          include: {
            harvests: {
              include: {
                plantations: true,
              },
            },
          },
        },
      },
    });

    if (!foundRuralProducer) {
      return null;
    }

    return new RuralProducer({
      id: foundRuralProducer.id,
      name: foundRuralProducer.name,
      document: foundRuralProducer.document,
      personType: RuralProducerPersonType[foundRuralProducer.person_type],
      farms: foundRuralProducer.farms.map(
        farm =>
          new Farm({
            id: farm.id,
            ruralProducerId: farm.rural_producer_id,
            name: farm.name,
            city: farm.city,
            state: farm.state,
            totalArea: farm.total_area,
            arableArea: farm.arable_area,
            vegetationArea: farm.vegetation_area,
            harvests: farm.harvests.map(
              harvest =>
                new Harvest({
                  id: harvest.id,
                  farmId: harvest.farm_id,
                  name: harvest.name,
                  year: harvest.year,
                  plantations: harvest.plantations.map(
                    plantation =>
                      new Plantation({
                        id: plantation.id,
                        harvestId: plantation.harvest_id,
                        name: plantation.name,
                        createdAt: plantation.created_at,
                        updatedAt: plantation.updated_at,
                      }),
                  ),
                  createdAt: harvest.created_at,
                  updatedAt: harvest.updated_at,
                }),
            ),
            createdAt: farm.created_at,
            updatedAt: farm.updated_at,
          }),
      ),
      createdAt: foundRuralProducer.created_at,
      updatedAt: foundRuralProducer.updated_at,
    });
  }

  async findByDocument(document: string): Promise<RuralProducer | null> {
    const foundRuralProducer = await prisma.ruralProducer.findUnique({
      where: { document },
    });

    if (!foundRuralProducer) {
      return null;
    }

    return new RuralProducer({
      id: foundRuralProducer.id,
      name: foundRuralProducer.name,
      document: foundRuralProducer.document,
      personType: RuralProducerPersonType[foundRuralProducer.person_type],
      createdAt: foundRuralProducer.created_at,
      updatedAt: foundRuralProducer.updated_at,
    });
  }

  async create(entity: RuralProducer): Promise<void> {
    await prisma.ruralProducer.create({
      data: {
        id: entity.id,
        name: entity.name,
        document: entity.document,
        person_type: entity.personType,
        created_at: entity.createdAt,
        updated_at: entity.updatedAt,
      },
    });
  }

  async update(entity: RuralProducer): Promise<void> {
    await prisma.ruralProducer.update({
      where: { id: entity.id },
      data: {
        name: entity.name,
        document: entity.document,
        person_type: entity.personType,
        updated_at: entity.updatedAt,
      },
    });
  }

  async delete(id: string): Promise<void> {
    await prisma.ruralProducer.delete({
      where: { id },
    });
  }
}
