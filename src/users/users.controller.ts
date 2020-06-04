import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { User } from './decorator/currentUser.decorator';

import { UsersService } from './users.service';
import { UtilsService } from '@libs/utils';
import { UpdateUserDto } from './dto/updateUser.dto';
import { CreateUserDto } from 'src/users/dto/createUser.dto';
import { JwtAuthGuard, JwtAdminAuthGuard } from 'libs/authen/src/jwt-auth.guard';
// import { JwtAdminAuthGuard } from 'libs/authen/src/jwtAdmin-auth.guard';
import { UserDocument } from '@libs/db/models/user.model';

@Controller('user')
@UseGuards(JwtAdminAuthGuard)
@ApiBearerAuth()
@ApiTags('User')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private utils: UtilsService,
  ) {}

  @Get('profile')
  @ApiOperation({ summary: 'get user profile' })
  async getProfile(@User() user: UserDocument) {
    return this.utils.responseLayui(0, 'profile', { user });
  }

  @Get()
  @ApiOperation({ summary: 'fetch user list' })
  getAllUsers() {
    return this.usersService.getAllUsers();
  }

  @Get(':id')
  @ApiOperation({ summary: 'fetch user by id' })
  getUserById(@Param('id') id: string) {
    return this.usersService.getUserById(id);
  }

  @Post()
  @ApiOperation({ summary: 'create new user' })
  async createUser(@Body() user: CreateUserDto) {
    return this.usersService.createUser(user);
  }

  @Put(':id')
  @ApiOperation({ summary: 'update user by id' })
  async updateUser(@Param('id') id: string, @Body() user: UpdateUserDto) {
    return this.usersService.updateUser(id, user);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'delete user by id' })
  async deleteUser(@Param('id') id: string) {
    this.usersService.deleteUser(id);
  }
}
