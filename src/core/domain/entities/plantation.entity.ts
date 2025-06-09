import { Entity } from '@/core/shared/domain/entities/entity.abstract';

type PlantationProps = {
  id?: string;
  harvestId: string;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
};

export default class Plantation extends Entity {
  private _harvestId: string;
  private _name: string;

  constructor(props: PlantationProps) {
    super(props.id, props.createdAt, props.updatedAt, props.deletedAt);
    this._harvestId = props.harvestId;
    this._name = props.name;
  }

  get harvestId(): string {
    return this._harvestId;
  }

  get name(): string {
    return this._name;
  }

  toJSON(): object {
    return {
      id: this.id,
      harvest_id: this._harvestId,
      name: this._name,
      created_at: this.createdAt,
      updated_at: this.updatedAt,
      deleted_at: this.deletedAt,
    };
  }
}
