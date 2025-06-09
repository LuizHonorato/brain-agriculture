import HarvestOutputPort from '@/core/application/ports/output/harvest.output-port';
import Harvest from '@/core/domain/entities/harvest.entity';
import prisma from '../prisma/client';

export default class HarvestPrismaRepository implements HarvestOutputPort {
  async findById(id: string): Promise<Harvest | null> {
    const harvest = await prisma.harvest.findUnique({
      where: { id },
    });

    if (!harvest) {
      return null;
    }

    return new Harvest({
      id: harvest.id,
      farmId: harvest.farm_id,
      name: harvest.name,
      year: harvest.year,
      createdAt: harvest.created_at,
      updatedAt: harvest.updated_at,
    });
  }

  async create(entity: Harvest): Promise<void> {
    await prisma.harvest.create({
      data: {
        id: entity.id,
        farm_id: entity.farmId,
        name: entity.name,
        year: entity.year,
        created_at: entity.createdAt,
        updated_at: entity.updatedAt,
      },
    });
  }

  async delete(id: string): Promise<void> {
    await prisma.harvest.delete({
      where: { id },
    });
  }
}
