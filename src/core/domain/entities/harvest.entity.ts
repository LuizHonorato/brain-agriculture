import { Entity } from '@/core/shared/domain/entities/entity.abstract';
import Plantation from './plantation.entity';

export type HarvestProps = {
  id?: string;
  farmId: string;
  name: string;
  year: number;
  plantations?: Plantation[];
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
};

export default class Harvest extends Entity {
  private _farmId: string;
  private _name: string;
  private _year: number;
  private _plantations: Plantation[];

  constructor(props: HarvestProps) {
    super(props.id, props.createdAt, props.updatedAt, props.deletedAt);
    this._farmId = props.farmId;
    this._name = props.name;
    this._year = props.year;
    this._plantations = props.plantations || [];
  }

  get farmId(): string {
    return this._farmId;
  }

  get name(): string {
    return this._name;
  }

  get year(): number {
    return this._year;
  }

  get plantations(): Plantation[] {
    return this._plantations;
  }

  toJSON(): object {
    return {
      id: this.id,
      farm_id: this._farmId,
      name: this._name,
      year: this._year,
      plantations: this._plantations.map(plantation => plantation.toJSON()),
      created_at: this.createdAt,
      updated_at: this.updatedAt,
      deleted_at: this.deletedAt,
    };
  }
}
