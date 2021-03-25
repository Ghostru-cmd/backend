import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { ItemEntity } from 'src/items/items.entity';
import { getRepository } from 'typeorm';

@Controller('users')
export class UsersController {
    @Get()
    async getUsers(@Res() res: Response): Promise<void> {
        const findUsers: any = await getRepository(ItemEntity).find({ select: ["users"] })
		const users: string = findUsers[0].users
		res.writeHead(200, {
			'Access-Control-Allow-Origin': '*'
		})
		res.end(users)
    }
}
