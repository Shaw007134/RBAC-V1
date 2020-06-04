import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  UseGuards,
} from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { RoleMenu } from '@libs/db/models/role_menu.model';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';

import { RoleMenuDto } from './rolemenu.dto';
import { JwtAdminAuthGuard } from '@libs/authen/jwt-auth.guard';

@UseGuards(JwtAdminAuthGuard)
@ApiTags('role menu')
@Controller('rolemenu')
@ApiBearerAuth()
export class RolemenuController {
  constructor(
    @InjectModel(RoleMenu) private readonly rolemenu: ModelType<RoleMenu>,
  ) {}

  @Get(':id')
  async getMenuById(@Param('id') id: string) {
    return await this.rolemenu.findById(id);
  }

  @Get()
  async getAllRoleMenus() {
    return await this.rolemenu.find().exec();
  }

  @Post()
  async createMenu(@Body() rolemenu: RoleMenuDto) {
    return await this.rolemenu.create(rolemenu);
  }

  @Put(':id')
  async updatemenu(@Param('id') id: string, @Body() rolemenu: RoleMenuDto) {
    return await this.rolemenu.findOneAndUpdate({ _id: id }, rolemenu, {
      new: true,
      upsert: false,
      runValidators: true,
    });
  }

  @Delete(':id')
  async deletemenu(@Param('id') id: string) {
    return await this.rolemenu.findOneAndDelete({ _id: id });
  }
}
