import { Injectable } from '@nestjs/common';
// import { ItemEntity } from 'src/items/items.entity';
import { getRepository } from 'typeorm';

@Injectable()
export class UsersService {
    // async getUsers(): Promise<string> {
    //     const findUsers: Array<any> = await getRepository(ItemEntity).find({ select: ["users"] })
	// 	const users: string = findUsers[0].users
	// 	return users
    // }
}
