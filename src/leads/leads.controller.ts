import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { ItemEntity } from 'src/items/items.entity';
import { getRepository } from 'typeorm';

@Controller('leads')
export class LeadsController {
	@Get()
	async getLeads(@Res() res: Response): Promise<any> {
		const findLeads: any = await getRepository(ItemEntity).find({ select: ["leads"] })
		const leads: string = findLeads[0].leads
		res.writeHead(200, {
			'Access-Control-Allow-Origin': '*'
		})
		res.end(leads)
	}
}
