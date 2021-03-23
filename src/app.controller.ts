import { Controller, Get, Param, Req } from '@nestjs/common';
import { AppService } from './app.service';
const AmoCRM = require( 'amocrm-js' );

const crm = new AmoCRM({
  domain: 'devtulevand',
  auth: {
    client_id: '5286a92f-df6d-43ab-a40b-12ffa34ccfac',
    client_secret: 'optVa0t7kO3WryvHhE1NYsqhmb6HA2GeF4t3lQgQbIbpfUCBcQzS6lyjwgYxvlrP',
    redirect_uri: 'https://9e20b8504ad6.ngrok.io',
    server: {
      port: 4000
    }
  },
});

(async () => {
	const url = crm.connection.getAuthUrl()
	console.log(url)
	const test = await crm.request.get('/api/v4/leads?with=source_id')
})();

export default crm

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getLeads(): Promise<any> {
    const responseLeads = await crm.request.get('/api/v4/leads')
    const leads = responseLeads.data._embedded.leads
    const jsonLeads = JSON.stringify(leads)
    return jsonLeads;
  }
}