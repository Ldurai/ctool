import { InputType, Field, Int } from '@nestjs/graphql';


@InputType()
export class EmployeeSelfAssessmentSectionInput {
  @Field(() => Int)
  tenant_id: number;

  @Field(() => Int)
  assessmentid: number;

  @Field(() => Int)
  sectionid: number;

  @Field({ nullable: true })
  response?: string;
}
