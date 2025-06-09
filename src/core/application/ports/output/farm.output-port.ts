import Farm from '@/core/domain/entities/farm.entity';

export default interface FarmOutputPort {
  findById(id: string): Promise<Farm | null>;
  create(entity: Farm): Promise<void>;
  delete(id: string): Promise<void>;
}
