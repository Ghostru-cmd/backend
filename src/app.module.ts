import { HttpModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LeadsController } from './leads/leads.controller';
import { ContactsController } from './contacts/contacts.controller';
import { UsersController } from './users/users.controller';
import { PipelinesController } from './pipelines/pipelines.controller';
import { SearchController } from './search/search.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemsModule } from './items/items.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [TypeOrmModule.forRoot(), ScheduleModule.forRoot(), HttpModule, ItemsModule],
  controllers: [AppController, LeadsController, ContactsController, UsersController, PipelinesController, SearchController],
  providers: [AppService],
})
export class AppModule {}
