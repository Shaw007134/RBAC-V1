import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UtilsModule } from '@libs/utils';
import {AuthenModule} from '@libs/authen'

@Module({
  imports: [UtilsModule, AuthenModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {
  
}
