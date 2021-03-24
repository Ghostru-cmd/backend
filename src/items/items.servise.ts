import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ItemEntity } from './items.entity';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(ItemEntity)
    private usersRepository: Repository<ItemEntity>,
  ) {}

  findAll(): Promise<ItemEntity[]> {
    return this.usersRepository.find();
  }

  findOne(id: string): Promise<ItemEntity> {
    return this.usersRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}