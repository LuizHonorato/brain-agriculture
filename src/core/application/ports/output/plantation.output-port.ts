import Plantation from '@/core/domain/entities/plantation.entity';

export default interface PlantationOutputPort {
  findById(id: string): Promise<Plantation | null>;
  create(entity: Plantation): Promise<void>;
  delete(id: string): Promise<void>;
}
