import { AggregateRootInterface } from '@/core/shared/domain/entities/aggregate-root.interface';
import { Entity } from '@/core/shared/domain/entities/entity.abstract';
import Farm from './farm.entity';
import { RuralProducerPersonType } from '../enums/rural-producer-person-type.enum';

export type RuralProducerProps = {
  id?: string;
  name: string;
  document: string;
  personType?: RuralProducerPersonType;
  farms?: Farm[];
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
};

export default class RuralProducer
  extends Entity
  implements AggregateRootInterface
{
  private _name: string;
  private _document: string;
  private _personType: RuralProducerPersonType;
  private _farms: Farm[];

  constructor(props: RuralProducerProps) {
    super(props.id, props.createdAt, props.updatedAt, props.deletedAt);
    this._name = props.name;
    this._document = props.document;
    this._personType =
      props.personType || RuralProducerPersonType.NATURAL_PERSON;
    this._farms = props.farms || [];

    this.validate();
  }

  validate(): void {
    if (!this._name || this._name.trim() === '') {
      throw new Error('Invalid name');
    }

    if (!this._document || this._document.trim() === '') {
      throw new Error('Invalid document');
    }

    if (
      this._document.length !== 11 &&
      this._document.length !== 14 &&
      !/^\d+$/.test(this._document)
    ) {
      throw new Error('Invalid document format');
    }
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get document(): string {
    return this._document;
  }

  set document(value: string) {
    this._document = value;
    this.defineRuralProductPersonType();
  }

  get personType(): RuralProducerPersonType {
    return this._personType;
  }

  get farm(): Farm[] {
    return this._farms;
  }

  defineRuralProductPersonType(): void {
    if (this._document.length === 11) {
      this._personType = RuralProducerPersonType.NATURAL_PERSON;
    } else if (this._document.length === 14) {
      this._personType = RuralProducerPersonType.LEGAL_PERSON;
    }
  }

  toJSON(): object {
    return {
      id: this.id,
      name: this.name,
      document: this.document,
      person_type: this.personType,
      farms: this.farm.map(farm => farm.toJSON()),
      created_at: this.createdAt,
      updated_at: this.updatedAt,
      deleted_at: this.deletedAt,
    };
  }
}
