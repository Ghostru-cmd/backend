import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import crm from '../app.controller';

@Controller('pipelines')
export class PipelinesController {
    @Get()
    async getPipelines(@Res() res: Response): Promise<void> {
        const responsePipelines = await crm.request.get('/api/v4/leads/pipelines')
        const pipelines = responsePipelines.data._embedded.pipelines
        const jsonPipelines = JSON.stringify(pipelines)
        res.writeHead(200, {
            'Access-Control-Allow-Origin': '*'
        })
        res.end(jsonPipelines)
    }
}
