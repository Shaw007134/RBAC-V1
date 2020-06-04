/* eslint-disable @typescript-eslint/camelcase */
import { Controller, Post, UseGuards, Body, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UtilsService } from '@libs/utils';
import { LocalAuthGuard } from 'libs/authen/src/local-auth.guard';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';




@Controller('')
@ApiTags('Auth')
export class AuthController {
  constructor(private authService: AuthService, private utils: UtilsService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  @ApiOperation({ summary: 'login' })
  async login(@Body() user: LoginDto, @Req() req) {
    const access_token = this.authService.login(req.user);
    console.log(access_token);
    return this.utils.responseLayui(0, 'login in', access_token);
  }

  @Post('register')
  @ApiOperation({ summary: 'register' })
  async register(@Body() user: RegisterDto) {
    return this.authService.register(user);
  }


}
