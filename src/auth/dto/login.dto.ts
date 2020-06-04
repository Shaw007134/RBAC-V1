import { ApiProperty } from '@nestjs/swagger';
import { Prop } from '@typegoose/typegoose';

export class LoginDto {
  @ApiProperty({ example: 'admin', required: true })
  @Prop({ unique: true })
  username: string;
  @ApiProperty({ example: '123456', required: true })
  password: string;
}
