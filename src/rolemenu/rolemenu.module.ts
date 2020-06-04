import { Module } from '@nestjs/common';
import { RolemenuController } from './rolemenu.controller';

@Module({
  controllers: [RolemenuController]
})
export class RolemenuModule {}
