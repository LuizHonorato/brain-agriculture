export class DefaultResponse {
  constructor(
    public readonly success: boolean,
    public readonly data?: any,
  ) {}
}
