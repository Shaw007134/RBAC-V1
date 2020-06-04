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

import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { MenuDto } from './menu.dto';
import { JwtAuthGuard } from '@libs/authen/jwt-auth.guard';
import { MenusService } from './menus.service';

@Controller('menu')
@UseGuards(JwtAuthGuard)
@ApiTags('menu')
@ApiBearerAuth()
export class MenusController {
  constructor(private readonly menusService: MenusService) {}

  @Get(':id')
  async getMenuById(@Param('id') id: string) {
    return await this.menusService.getMenuById(id);
  }

  @Get()
  async getAllMenu() {
    return await this.menusService.getAllMenus();
  }

  @Post()
  async createMenu(@Body() menu: MenuDto) {
    const res = await this.menusService.createMenu(menu);
    return res;
  }

  @Put(':id')
  async updatemenu(@Param('id') id: string, @Body() menu: MenuDto) {
    return await this.menusService.updateMenu(id, menu);
  }
  @Delete(':id')
  async deletemenu(@Param('id') id: string) {
    return await this.menusService.deleteMenu(id);
  }
}
