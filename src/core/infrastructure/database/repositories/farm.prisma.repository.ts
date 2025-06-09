import FarmOutputPort from '@/core/application/ports/output/farm.output-port';
import Farm from '@/core/domain/entities/farm.entity';
import prisma from '../prisma/client';

export default class FarmPrismaRepository implements FarmOutputPort {
  async findById(id: string): Promise<Farm | null> {
    const foundFarm = await prisma.farm.findUnique({
      where: { id },
    });

    if (!foundFarm) {
      return null;
    }

    return new Farm({
      id: foundFarm.id,
      name: foundFarm.name,
      ruralProducerId: foundFarm.rural_producer_id,
      city: foundFarm.city,
      state: foundFarm.state,
      totalArea: foundFarm.total_area,
      arableArea: foundFarm.arable_area,
      vegetationArea: foundFarm.vegetation_area,
      createdAt: foundFarm.created_at,
      updatedAt: foundFarm.updated_at,
    });
  }

  async create(entity: Farm): Promise<void> {
    await prisma.farm.create({
      data: {
        id: entity.id,
        name: entity.name,
        rural_producer_id: entity.ruralProducerId,
        city: entity.city,
        state: entity.state,
        total_area: entity.totalArea,
        arable_area: entity.arableArea,
        vegetation_area: entity.vegetationArea,
        created_at: entity.createdAt,
        updated_at: entity.updatedAt,
        deleted_at: entity.deletedAt,
      },
    });
  }

  async delete(id: string): Promise<void> {
    await prisma.farm.delete({
      where: { id },
    });
  }
}
