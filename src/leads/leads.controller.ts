import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import crm from '../app.controller';


@Controller('leads')
export class LeadsController {
    @Get()
    async getLeads(@Res() res: Response): Promise<any> {
        const responseLeads = await crm.request.get('/api/v4/leads')
        const leads = responseLeads.data._embedded.leads
        const jsonLeads = JSON.stringify(leads)
        res.writeHead(200, {
          'Access-Control-Allow-Origin': '*'
        })
        res.end(jsonLeads)
    }
}
