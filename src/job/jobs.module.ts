import { Module } from '@nestjs/common';
import { JobsResolver } from './job.resolver'; // Import the JobsResolver
import { JobsService } from './jobs.service' // Import the JobsService
import { JobEntity } from './jobs.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobsController } from './job.controller';



@Module({
  imports: [TypeOrmModule.forFeature([JobEntity])],
  providers: [
    JobsResolver, // Add the JobsResolver to the providers array
    JobsService, // Add the JobsService to the providers array
  ],
  controllers: [JobsController],
  exports: [JobsService],
})
export class JobsModule {}
