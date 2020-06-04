import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Menu } from 'libs/db/src/models/menu.model';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { MenuDto } from './menu.dto';

@Injectable()
export class MenusService {
  constructor(@InjectModel(Menu) private readonly menuModel: ModelType<Menu>){}

  
  async getAllMenus() {
    return await this.menuModel.find().exec();
  }

  async getMenuById(id: string) {
    return await this.menuModel.findById(id);
  }

  async getMenuByName(menuname: string) {
    return await this.menuModel.findOne({ menuname }).select('+password');
  }

  async createMenu(menu: MenuDto) {
    return await this.menuModel.create(menu);
  }

  async updateMenu(id: string, menu) {
    return await this.menuModel.findOneAndUpdate({ _id: id }, menu, {
      new: true,
      upsert: false,
      runValidators: true,
    });
  }

  async deleteMenu(id: string) {
    return await this.menuModel.findOneAndDelete({ _id: id });
  }
}
