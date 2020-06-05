/* eslint-disable @typescript-eslint/camelcase */
import {
  Injectable,
  HttpException,
  HttpStatus,
  BadRequestException,
} from '@nestjs/common';
import { UsersService } from '../../../src/users/users.service';
import { compareSync,  } from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthenService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.getUserByName(username);
    if (user) {
      if (compareSync(password, String(user.password))) {
        return user;
      }
    }
    return null;
  }

  async getUserById(id: string) {
    try {
      const user = await this.usersService.getUserById(id);
      return user;
    } catch (error) {
      console.log(error);
      throw new HttpException('user not found', HttpStatus.NOT_FOUND);
    }
  }

  login(user: any) {
    const payload = { username: user.username, id: String(user._id) };
    const access_token = this.jwtService.sign(payload);
    return {
      access_token,
    };
  }

  async register(user: any) {
    try {
      const createdUser = await this.usersService.createUser({
        ...user,
        roles: [],
      });
      return createdUser;
    } catch (error) {
      console.log(error);
      throw new BadRequestException('duplicate key error');
    }
  }
}
