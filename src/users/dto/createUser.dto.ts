import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export enum UserRole {
  Admin = 'Admin',
  Moderator = 'Moderator',
  User = 'User',
}

export class CreateUserDto {
  @ApiProperty({ description: 'username', required: true, example: 'admin' })
  username?: string;
  @ApiProperty({ description: 'username', required: true, example: '123456' })
  password?: string;

  @IsNotEmpty({ message: 'please input email address' })
  email?: string;
  phone?: number;
  roles: UserRole[] = [];
  isEnabled?: boolean = true;
}
