import Id from '../value-objects/id.value-object';

export abstract class Entity {
  private _id: string;
  private _createdAt: Date;
  private _updatedAt: Date;
  private _deletedAt: Date | undefined;

  constructor(
    id?: string,
    createdAt?: Date,
    updatedAt?: Date,
    deletedAt?: Date,
  ) {
    this._id = id || new Id().id;
    this._createdAt = createdAt || new Date();
    this._updatedAt = updatedAt || new Date();
    this._deletedAt = deletedAt || undefined;
  }

  get id(): string {
    return this._id;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  get updatedAt(): Date {
    return this._updatedAt;
  }

  get deletedAt(): Date | undefined {
    return this._deletedAt;
  }
}
