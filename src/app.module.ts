import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from 'libs/db/src';
import { MenusModule } from './menus/menus.module';
import { RolemenuModule } from './rolemenu/rolemenu.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AuthModule, DbModule, MenusModule, RolemenuModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
