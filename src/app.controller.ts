import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {JobEntity} from './job/jobs.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello')
  getHello(): string {
    console.log("entering conrtoller");
    return "hello";
  }
  
}
