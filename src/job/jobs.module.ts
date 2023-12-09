import { Module } from '@nestjs/common';
import { JobsResolver } from './job.resolver'; // Import the JobsResolver
import { JobsService } from './jobs.service' // Import the JobsService
import { Job } from './jobs.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobsController } from './job.controller';



@Module({
  imports: [TypeOrmModule.forFeature([Job])],
  providers: [
    JobsResolver, // Add the JobsResolver to the providers array
    JobsService, // Add the JobsService to the providers array
  ],
  controllers: [JobsController],
})
export class JobsModule {}
