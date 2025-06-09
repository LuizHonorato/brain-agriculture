import { Entity } from '@/core/shared/domain/entities/entity.abstract';
import Harvest from './harvest.entity';

export type FarmProps = {
  id?: string;
  ruralProducerId: string;
  name: string;
  city: string;
  state: string;
  totalArea: number;
  arableArea: number;
  vegetationArea: number;
  harvests?: Harvest[];
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
};

export default class Farm extends Entity {
  private _ruralProducerId: string;
  private _name: string;
  private _city: string;
  private _state: string;
  private _totalArea: number;
  private _arableArea: number;
  private _vegetationArea: number;
  private _harvests: Harvest[];

  constructor(props: FarmProps) {
    super(props.id, props.createdAt, props.updatedAt, props.deletedAt);
    this._ruralProducerId = props.ruralProducerId;
    this._name = props.name;
    this._city = props.city;
    this._state = props.state;
    this._totalArea = props.totalArea;
    this._arableArea = props.arableArea;
    this._vegetationArea = props.vegetationArea;
    this._harvests = props.harvests || [];
  }

  get ruralProducerId(): string {
    return this._ruralProducerId;
  }

  get name(): string {
    return this._name;
  }

  get city(): string {
    return this._city;
  }

  get state(): string {
    return this._state;
  }

  get totalArea(): number {
    return this._totalArea;
  }

  get arableArea(): number {
    return this._arableArea;
  }

  get vegetationArea(): number {
    return this._vegetationArea;
  }

  get harvests(): Harvest[] {
    return this._harvests;
  }

  toJSON(): object {
    return {
      id: this.id,
      rural_producer_iid: this._ruralProducerId,
      name: this._name,
      city: this._city,
      state: this._state,
      total_area: this._totalArea,
      arable_area: this._arableArea,
      vegetation_area: this._vegetationArea,
      harvests: this.harvests.map(harvest => harvest.toJSON()),
      created_at: this.createdAt,
      updated_at: this.updatedAt,
      deleted_at: this.deletedAt,
    };
  }
}
