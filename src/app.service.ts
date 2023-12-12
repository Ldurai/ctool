import { Injectable } from '@nestjs/common';
import { JobsService } from './job/jobs.service'; // Adjust the path as necessary
import { JobEntity } from './job/jobs.entity'; // Adjust the path as necessary



@Injectable()
export class AppService {
  constructor(private jobsService: JobsService) {}

  getHello(): string {
    console.log("entering service");
    return 'Hello World!';
  }
  async getJobs(): Promise<JobEntity[]> {
    console.log("Fetching jobs data");
    return this.jobsService.findAll(); // Assuming 'findAll' is a method in JobsService
  }
}

