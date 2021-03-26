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
import { ContactsService } from './contacts/contacts.service';
import { LeadsService } from './leads/leads.service';
import { PipelinesService } from './pipelines/pipelines.service';
import { SearchService } from './search/search.service';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { SearchModule } from './search/search.module';
import { PipelinesModule } from './pipelines/pipelines.module';
import { LeadsModule } from './leads/leads.module';
import { ContactsModule } from './contacts/contacts.module';

@Module({
  imports: [TypeOrmModule.forRoot(), ScheduleModule.forRoot(), HttpModule, ItemsModule, UsersModule, SearchModule, PipelinesModule, LeadsModule, ContactsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
