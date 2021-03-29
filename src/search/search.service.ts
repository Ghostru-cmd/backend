import { Injectable } from '@nestjs/common';
import { Leads } from 'src/items/items.entity';
import { getRepository } from 'typeorm';

@Injectable()
export class SearchService {
    async getSearch(query: any): Promise<any> {
		const search: Array<any> = await getRepository(Leads).find({ where: { name: query } })
        console.log(search);
        
		return search;
	}
}
