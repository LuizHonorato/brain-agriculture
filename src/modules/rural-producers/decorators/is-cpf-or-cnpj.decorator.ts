import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
} from 'class-validator';
import { cpf, cnpj } from 'cpf-cnpj-validator';

export function IsCpfOrCnpj(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'isCpfOrCnpj',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any) {
          return (
            typeof value === 'string' &&
            (cpf.isValid(value) || cnpj.isValid(value))
          );
        },
        defaultMessage(args: ValidationArguments) {
          return `${args.property} must be a valid CPF or CNPJ`;
        },
      },
    });
  };
}
