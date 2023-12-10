import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {Job} from './job/jobs.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello')
  getHello(): string {
    console.log("entering conrtoller");
    return this.appService.getHello();
  }
  @Get('/getjobs')
  getJobs(): Promise<Job[]> {
    return this.appService.getJobs();
  }
  
}
