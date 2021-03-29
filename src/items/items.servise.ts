import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository, Repository } from 'typeorm';
import { Leads, Contacts } from './items.entity';
import crm from '../app.controller'

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Leads)
    private leadsRepository: Repository<Leads>,
    @InjectRepository(Contacts)
    private contactsRepository: Repository<Contacts>,
  ) {}
    
  @Cron('1 */5 * * * *')
  async saveInDB(): Promise<void> {
    
    const responseLeads = await crm.request.get('/api/v4/leads?with=contacts')
    const leads = responseLeads.data._embedded.leads
    
    const responseContacts = await crm.request.get('/api/v4/contacts')
    const contacts = responseContacts.data._embedded.contacts
    
    const responsePipelines = await crm.request.get('/api/v4/leads/pipelines')
    let pipelines: Array<any> = []    
    for(let i = 0; i < responsePipelines.data._embedded.pipelines.length; i++){
      let statuses = responsePipelines.data._embedded.pipelines[i]._embedded.statuses
      pipelines[i] = statuses
    }
    
    const responseUsers = await crm.request.get('/api/v4/users')
    const users = responseUsers.data._embedded.users


    let contactsDBs = []
    
    contacts.forEach(async contact => {
      let phoneEmail = contact.custom_fields_values.map(phoneEmail => phoneEmail.values[0].value)
      let contactDB = new Contacts()
      contactDB.external_Id = contact.id
      contactDB.name = contact.name
      contactDB.phone = phoneEmail[0]
      contactDB.email = phoneEmail[1]
      
      contactsDBs.push(contactDB)
      
      let isSetContact = await getRepository(Contacts).find({ where: { external_Id: contact.id } })
      if (isSetContact.length) {
        console.log('update');      
        this.contactsRepository.update( isSetContact[0].id , contactDB )
      } else {
        console.log('save');
        this.contactsRepository.save(contactDB)
      }
      
    })

    leads.forEach(async lead => {
      let status: any
      for(let i = 0; i < pipelines.length; i++){
        status = pipelines[i].find(status => status.id == lead.status_id)
        if (status) break;
      }
      let responsible_user = users.find(user => user.id == lead.responsible_user_id)

      let leadsDB = new Leads()
      leadsDB.external_Id = lead.id
      leadsDB.name = lead.name
      leadsDB.status = [status.name, status.color]
      leadsDB.responsible_user = responsible_user.name
      leadsDB.created_at = lead.created_at
      leadsDB.price = lead.price
      leadsDB.tags = []
      for(let i = 0; i < lead._embedded.tags.length; i++){ 
        leadsDB.tags.push(lead._embedded.tags[i].name)
      }

      // let contactsDB = []
      // let contactsIdArray = lead._embedded.contacts.map(contact => contact.id)
      // console.log(lead._embedded);
      // contactsDBs.forEach(con => {
      //   for (let i = 0; i < contactsIdArray.length; i++) {
      //     if (con.external_Id == contactsIdArray[i]) {
      //       contactsDB.push(con)
      //     }
      //   }
      // })

      

      let isSetLead: any = await getRepository(Leads).find({ where: { external_Id: lead.id } })
      console.log(isSetLead);
         
      if (isSetLead.length) {
        console.log('update');      
        this.leadsRepository.update( isSetLead[0].id , leadsDB )
      } else {
        console.log('save');
        leadsDB.contact = contactsDBs
        this.leadsRepository.save(leadsDB)
      }
    })
      
    
    // const jsonLeads = JSON.stringify(leads)

    // const responsePipelines = await crm.request.get('/api/v4/leads/pipelines')
    // const pipelines = responsePipelines.data._embedded.pipelines
    // const jsonPipelines = JSON.stringify(pipelines)

    // const responseUsers = await crm.request.get('/api/v4/users')
    // const users = responseUsers.data._embedded.users
    // const jsonUsers = JSON.stringify(users)

    // const responseContacts = await crm.request.get('/api/v4/contacts')
    // const contacts = responseContacts.data._embedded.contacts
    // const jsonContacts = JSON.stringify(contacts)

    // let item: Item = {
    //   leads: jsonLeads,
    //   pipelines: jsonPipelines,
    //   users: jsonUsers,
    //   contacts: jsonContacts,
    // }

    // await getConnection()
    // .createQueryBuilder()
    // .delete()
    // .from(ItemEntity)
    // .execute();

    // this.itemsRepository.save(item);
    
  }
}
