import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Job entity representing a job posting' })
export class Job {
  @Field(type => ID)
  job_id: number;

  @Directive('@upper')
  @Field() // Add this decorator
  job_title: string;

  @Field()
  job_description: string;
}

