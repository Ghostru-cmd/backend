import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contacts, Leads } from './items.entity';
import { ItemService } from './items.servise';
import { ItemsController } from './items.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Leads]), TypeOrmModule.forFeature([Contacts])
  ],
  controllers: [ItemsController],
  providers: [ItemService]
})

export class ItemsModule {
}