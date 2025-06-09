import { IsString, MinLength } from 'class-validator';
import { IsCpfOrCnpj } from '../decorators/is-cpf-or-cnpj.decorator';
import { Transform } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CreateRuralProducerDto {
  @IsString({ message: 'Name must be a string' })
  @MinLength(2, { message: 'Name must be at least 2 characters long' })
  @ApiProperty({
    description: 'Name of the rural producer',
    example: 'João da Silva',
  })
  name: string;

  @IsString({ message: 'Document must be a string' })
  @IsCpfOrCnpj({ message: 'Document must be a valid CPF or CNPJ' })
  @Transform(({ value }: { value: string }) => value.replace(/[.\-/]/g, ''))
  @ApiProperty({
    description: 'Document of the rural producer',
    example: '332.139.100-74',
  })
  document: string;
}
