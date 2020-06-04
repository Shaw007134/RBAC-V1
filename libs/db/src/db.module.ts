import { Module, Global } from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { User } from './models/user.model';
import { Menu } from './models/menu.model';
import { RoleMenu } from './models/role_menu.model';

const models = TypegooseModule.forFeature([Menu, RoleMenu, User]);

@Global()
@Module({
  imports: [
    TypegooseModule.forRoot('mongodb://localhost/rbac', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }),
    models,
  ],
  providers: [DbService],
  exports: [DbService, models],
})
export class DbModule {}
