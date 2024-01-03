import { InputType, Field, Int } from '@nestjs/graphql';
import { IsInt, IsOptional, IsString, MaxLength, Min } from 'class-validator';

@InputType()
export class EmployeeSelfAssessmentSectionInput {
  @Field(() => Int)
  @IsInt()
  @Min(1) // assuming tenant_id should be a positive integer
  tenant_id: number;

  @Field(() => Int)
  @IsInt()
  @Min(1) // assuming assessmentid should be a positive integer
  assessmentid: number;

  @Field(() => Int)
  @IsInt()
  @Min(1) // assuming sectionid should be a positive integer
  sectionid: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  response?: string;

  @Field(() => Int)
  @IsInt()
  @Min(1) // assuming employeeid should be a positive integer
  employeeid: number;

  @Field(() => Int)
  @IsInt()
  @Min(1) // assuming cycleid should be a positive integer
  cycleid: number;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(50) // based on the database type of varchar(50)
  functionalarea?: string;
}
