import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { ServerDataService } from './store/serverData.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly serverData: ServerDataService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('cheaction')
  getCheAction(@Query('key') key: string) {
    const action = this.serverData.getAction(key);
    return action;
  }

  @Post('cheaction')
  updateCheAction(@Body() body: { key: string; redirect: string }) {
    const action = this.serverData.setAction(body.key, body.redirect);
    return action;
  }

  @Post('resetCheAction')
  resetCheAction(@Body() body: { key: string }) {
    const action = this.serverData.clearAction(body.key);
    return action;
  }
}
