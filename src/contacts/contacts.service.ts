import { Injectable } from '@nestjs/common';
import { Contacts } from 'src/items/items.entity';
import { getRepository } from 'typeorm';

@Injectable()
export class ContactsService {
    async getContacts(): Promise<Array<any>> {
        const contacts: Array<any> = await getRepository(Contacts).find()
        // let contacts = JSON.stringify(getContacts)
		return contacts
    }
}
