import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import crm from '../app.controller';

@Controller('users')
export class UsersController {
    @Get()
    async getUsers(@Res() res: Response): Promise<void> {
        const responseUsers = await crm.request.get('/api/v4/users')
        const users = responseUsers.data._embedded.users
        const jsonUsers = JSON.stringify(users)
        res.writeHead(200, {
            'Access-Control-Allow-Origin': '*'
        })
        res.end(jsonUsers)
    }
}
