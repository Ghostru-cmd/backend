import { Body, Controller, Get, Post } from '@nestjs/common';
import { ItemEntity } from './items.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/index';

interface Item {
    leads: string;
    pipelines: string;
    users: string;
    contacts: string;
}

@Controller('items')
export class ItemsController {

  constructor(@InjectRepository(ItemEntity)
              private readonly itemsRepository: Repository<ItemEntity>) {
  }

  @Get()
  getAll(): Promise<Item[]> {
    return this.itemsRepository.find();
  }

  @Post()
  create(@Body() newItem: Item): Promise<Item> {
    const item = this.itemsRepository.create(newItem);
    return this.itemsRepository.save(item);
  }
}
