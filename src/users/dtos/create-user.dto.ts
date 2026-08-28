import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    example: 'Quiti',
    description: 'Nombre del usuario',
  })
  name: string;

  @ApiProperty({
    example: 'quiti@gmail.com',
    description: 'Correo electrónico del usuario',
  })
  email: string;

  @ApiProperty({
    example: '123456',
    description: 'Contraseña del usuario',
  })
  password: string;
}