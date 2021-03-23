import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import crm from '../app.controller';

@Controller('contacts')
export class ContactsController {
    @Get()
    async getContacts(@Res() res: Response): Promise<void> {
        const responseContacts = await crm.request.get('/api/v4/contacts')
        const contacts = responseContacts.data._embedded.contacts
        const jsonContacts = JSON.stringify(contacts)
        res.writeHead(200, {
            'Access-Control-Allow-Origin': '*'
        })
        res.end(jsonContacts)
    }
}
