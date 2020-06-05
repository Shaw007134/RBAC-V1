import { Injectable } from '@nestjs/common';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { User } from 'libs/db/src/models/user.model';
import { InjectModel } from 'nestjs-typegoose';
import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';

/*
To do list:
1. HttpException handle
2. create friendly id in mongodb
*/

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private readonly userModel: ModelType<User>) {}

  async getAllUsers() {
    return await this.userModel.find().exec();
  }

  async getUserById(id: string) {
    return await this.userModel.findById(id);
  }

  async getUserByName(username: string) {
    return await this.userModel.findOne({ username }).select('+password');
  }

  async createUser(user: CreateUserDto) {
    const res = await this.userModel.create(user);
    return res;
  }

  async updateUser(id: string, user) {
    return await this.userModel.findOneAndUpdate({ _id: id }, user, {
      new: true,
      upsert: false,
      runValidators: true,
    });
  }

  async deleteUser(id: string) {
    return await this.userModel.findOneAndDelete({ _id: id });
  }
}
