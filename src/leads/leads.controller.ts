import { Controller, Get } from '@nestjs/common';
import { LeadsService } from './leads.service'

@Controller('leads')
export class LeadsController {
	constructor(private leadsService: LeadsService) {}

	@Get()
	leads(){
		return this.leadsService.getLeads()
	}
}
