import { Controller, Get } from '@nestjs/common';

@Controller('items')
export class ItemsController {

  @Get()
  async getAll(): Promise<any> {
    return [''];
  }
}
