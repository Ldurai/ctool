import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Job } from './models/jobs.model';
import { JobsService } from './jobs.service';
import { NewJobInput } from './dto/new-job.input';

@Resolver(of => Job)
export class JobsResolver {
  constructor(private readonly jobsService: JobsService) {}

  @Query(returns => [Job])
  jobs(): Promise<Job[]> {
    console.log('resolver');
    return this.jobsService.findAll();
  }

  @Query(returns => Job)
  async job(@Args('id') id: number): Promise<Job> {
    const job = await this.jobsService.findOneById(id);
    if (!job) {
      throw new NotFoundException(id);
    }
    return job;
  }

  @Mutation(returns => Job)
  addJob(@Args('newJobData') newJobData: NewJobInput): Promise<Job> {
    return this.jobsService.create(newJobData);
  }

  // Add more queries and mutations as needed
}



