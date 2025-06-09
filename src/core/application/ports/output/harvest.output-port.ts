import Harvest from '@/core/domain/entities/harvest.entity';

export default interface HarvestOutputPort {
  findById(id: string): Promise<Harvest | null>;
  create(entity: Harvest): Promise<void>;
  delete(id: string): Promise<void>;
}
