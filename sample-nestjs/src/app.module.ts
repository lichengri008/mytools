import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServerDataService } from './store/serverData.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, ServerDataService],
})
export class AppModule {}
