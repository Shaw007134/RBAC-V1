import { Module, Global } from '@nestjs/common';
import { AuthenService } from './authen.service';

import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { UsersModule } from '../../../src/users/users.module';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';
import { JwtAdminStrategy } from './jwtAdmin.strategy';
@Global()
@Module({
  imports: [UsersModule,
    PassportModule,
    JwtModule.registerAsync({
      useFactory() {
        return {
          secret: jwtConstants.secret,
          signOptions: { expiresIn: '600s' },
        };
      },
    }),],
  providers: [AuthenService, LocalStrategy, JwtStrategy, JwtAdminStrategy ],
  exports: [AuthenService],
})
export class AuthenModule {}
