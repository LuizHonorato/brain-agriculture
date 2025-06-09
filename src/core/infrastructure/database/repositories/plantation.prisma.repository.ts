import PlantationOutputPort from '@/core/application/ports/output/plantation.output-port';
import Plantation from '@/core/domain/entities/plantation.entity';
import prisma from '../prisma/client';

export default class PlantationPrismaRepository
  implements PlantationOutputPort
{
  async findById(id: string): Promise<Plantation | null> {
    const plantation = await prisma.plantation.findUnique({
      where: { id },
    });

    if (!plantation) {
      return null;
    }

    return new Plantation({
      id: plantation.id,
      harvestId: plantation.harvest_id,
      name: plantation.name,
      createdAt: plantation.created_at,
      updatedAt: plantation.updated_at,
    });
  }

  async create(entity: Plantation): Promise<void> {
    await prisma.plantation.create({
      data: {
        id: entity.id,
        harvest_id: entity.harvestId,
        name: entity.name,
        created_at: entity.createdAt,
        updated_at: entity.updatedAt,
        deleted_at: entity.deletedAt,
      },
    });
  }

  async delete(id: string): Promise<void> {
    await prisma.plantation.delete({
      where: { id },
    });
  }
}
