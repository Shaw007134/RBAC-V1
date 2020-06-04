import { ApiProperty } from "@nestjs/swagger";
import { prop } from "@typegoose/typegoose";

export enum UserRole {
  Admin = 'Admin',
  Moderator = 'Moderator',
  User = 'User',
}


export class UpdateUserDto {
  id: string;
  email?: string;
  phone?: number;
  roles: UserRole[];
  isEnabled?: boolean;
}
