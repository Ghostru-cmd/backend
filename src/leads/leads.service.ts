import { Injectable } from '@nestjs/common';
import { Leads } from 'src/items/items.entity';
import { getRepository } from 'typeorm';

@Injectable()
export class LeadsService {
    async getLeads(): Promise<any> {
		const leads: Array<any> = await getRepository(Leads).find()
		// const leads: string = JSON.stringify(findLeads)
		return leads;
	}
}