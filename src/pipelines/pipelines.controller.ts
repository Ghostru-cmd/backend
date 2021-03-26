import { Controller, Get } from '@nestjs/common';
import { PipelinesService } from './pipelines.service';

@Controller('pipelines')
export class PipelinesController {
    constructor(private PipelinesService: PipelinesService) {}

	@Get()
	pipelines(){
		// return this.PipelinesService.getPipelines()
	}
}
