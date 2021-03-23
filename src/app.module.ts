import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LeadsController } from './leads/leads.controller';
import { ContactsController } from './contacts/contacts.controller';
import { UsersController } from './users/users.controller';
import { PipelinesController } from './pipelines/pipelines.controller';
import { SearchController } from './search/search.controller';

@Module({
  imports: [],
  controllers: [AppController, LeadsController, ContactsController, UsersController, PipelinesController, SearchController],
  providers: [AppService],
})
export class AppModule {}
