import { Controller, Get, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import crm from '../app.controller';

@Controller('search')
export class SearchController {
    @Get(':str')
    async getSearch(@Param() query: any,@Res() res: Response): Promise<void> {
        console.log(query.str);
        const responseQuery = crm.request.get(`/api/v4/leads?query=` + encodeURIComponent(query.str))
        console.log(JSON.stringify(responseQuery));
        if (Object.keys(responseQuery).length) {
            const queryLeads = responseQuery.data._embedded.leads
            const jsonQuery = JSON.stringify(queryLeads)
            res.writeHead(200, {
                'Access-Control-Allow-Origin': '*'
            })
            res.end(jsonQuery)
        } else {
            console.log('Ответ пуст => ', query.str)
        }
    }
}
