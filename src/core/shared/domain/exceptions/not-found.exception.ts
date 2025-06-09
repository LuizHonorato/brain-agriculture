export default class NotFoundException extends Error {
  public readonly message: string;
  public readonly statusCode: number;

  constructor(message: string, statusCode: number = 404) {
    super(message);
    this.message = message;
    this.statusCode = statusCode;
  }
}
