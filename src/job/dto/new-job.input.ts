import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, Length, MaxLength } from 'class-validator';

@InputType()
export class NewJobInput {
  @Field()
  @MaxLength(255)
  job_title: string;

  @Field({ nullable: true })
  @IsOptional()
  @Length(30, 500)
  job_description?: string;
}
