import { Injectable } from '@nestjs/common';
// import { ItemEntity } from 'src/items/items.entity';
import { getRepository } from 'typeorm';

@Injectable()
export class PipelinesService {
    // async getPipelines(): Promise<string> {
    //     const findPipelines: Array<any> = await getRepository(ItemEntity).find({ select: ["pipelines"] })
	// 	const pipelines: string = findPipelines[0].pipelines
	// 	return pipelines
    // }
}
