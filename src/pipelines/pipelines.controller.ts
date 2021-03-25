import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { ItemEntity } from 'src/items/items.entity';
import { getRepository } from 'typeorm';

@Controller('pipelines')
export class PipelinesController {
    @Get()
    async getPipelines(@Res() res: Response): Promise<void> {
        const findPipelines: any = await getRepository(ItemEntity).find({ select: ["pipelines"] })
		const pipelines: string = findPipelines[0].pipelines
		res.writeHead(200, {
			'Access-Control-Allow-Origin': '*'
		})
		res.end(pipelines)
    }
}
