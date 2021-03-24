import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemEntity } from './items.entity';
import { ItemService } from './items.servise';
import { ItemsController } from './items.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([ItemEntity])
  ],
  controllers: [ItemsController],
  providers: [ItemService]
})

export class ItemsModule {
}