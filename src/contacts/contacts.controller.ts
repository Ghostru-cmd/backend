import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { ItemEntity } from 'src/items/items.entity';
import { getRepository } from 'typeorm';

@Controller('contacts')
export class ContactsController {
    @Get()
    async getContacts(@Res() res: Response): Promise<void> {
        const findContacts: any = await getRepository(ItemEntity).find({ select: ["contacts"] })
		const contacts: string = findContacts[0].contacts
		res.writeHead(200, {
			'Access-Control-Allow-Origin': '*'
		})
		res.end(contacts)
    }
}
