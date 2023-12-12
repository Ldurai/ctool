import { Injectable } from '@nestjs/common';
import { NewJobInput } from './dto/new-job.input';
import { JobEntity } from './jobs.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class JobsService {
  private jobs: JobEntity[] = []; // This is a placeholder. Replace it with your database logic.
  constructor(
    @InjectRepository(JobEntity)
    private readonly jobRepository: Repository<JobEntity>,
  ) {}
  async create(data: NewJobInput): Promise<JobEntity> {
    const newJob = { job_id: Date.now(), ...data } as JobEntity; // This is a mock implementation. Replace with real logic.
    this.jobs.push(newJob);
    return newJob;
  }

  async findAll(): Promise<JobEntity[]> {
    // Wait for the Promise to resolve and store the result in a variable
    const jobs = await this.jobRepository.find();

    // Log the data
    console.log('Data fetched from the database:', jobs);

    // Return the result
    return jobs;
  }

  async findOneById(id: number): Promise<JobEntity> {
    return this.jobs.find(job => job.job_id === id); // Replace with database fetching logic.
  }

  // Add other methods as needed (update, delete, etc.)
}
