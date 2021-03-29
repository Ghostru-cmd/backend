import { Controller, Get, Param } from '@nestjs/common';
import { SearchService } from './search.service';

@Controller('search')
export class SearchController {
    constructor(private searchService: SearchService) {}

	@Get(':query')
	leads(@Param() query: any){
        console.log(query.query);
		return this.searchService.getSearch(query.query)
	}
}
