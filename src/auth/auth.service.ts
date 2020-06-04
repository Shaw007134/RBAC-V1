/* eslint-disable @typescript-eslint/camelcase */
import { Injectable } from '@nestjs/common';
import { AuthenService } from '@libs/authen';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  constructor(private authenService: AuthenService) {}
  login(user: LoginDto) {
    return this.authenService.login(user);
  }

  register(user: RegisterDto) {
    return this.authenService.register(user);
  }
}
