import { HttpModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemsModule } from './items/items.module';
import { ScheduleModule } from '@nestjs/schedule';
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
