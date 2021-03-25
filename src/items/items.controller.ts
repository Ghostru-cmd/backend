import { Controller, Get, Post } from '@nestjs/common';
import { ItemEntity } from './items.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/index';
import crm from '../app.controller'

interface Item {
    leads: string;
    pipelines: string;
    users: string;
    contacts: string;
}

@Controller('items')
export class ItemsController {

  constructor(
    @InjectRepository(ItemEntity)
    private readonly itemsRepository: Repository<ItemEntity>) {
  }

  @Get()
  async getAll(): Promise<any> {
    return this.itemsRepository.find();
  }

  @Post()
  async create(): Promise<any> {
    
    const responseLeads: any = await crm.request.get('/api/v4/leads')
    const leads: any = responseLeads.data._embedded.leads
    const jsonLeads: any = JSON.stringify(leads)

    const responsePipelines = await crm.request.get('/api/v4/leads/pipelines')
    const pipelines = responsePipelines.data._embedded.pipelines
    const jsonPipelines = JSON.stringify(pipelines)

    const responseUsers = await crm.request.get('/api/v4/users')
    const users = responseUsers.data._embedded.users
    const jsonUsers = JSON.stringify(users)

    const responseContacts = await crm.request.get('/api/v4/contacts')
    const contacts = responseContacts.data._embedded.contacts
    const jsonContacts = JSON.stringify(contacts)

    let item: Item = {
      leads: jsonLeads,
      pipelines: jsonPipelines,
      users: jsonUsers,
      contacts: jsonContacts,
    }

    return this.itemsRepository.save(item);
    
  }
}
