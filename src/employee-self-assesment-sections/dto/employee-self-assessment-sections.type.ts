import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType('EmployeeSelfAssessmentSection')
export class EmployeeSelfAssessmentSectionsType {
  @Field(() => Int)
  tenant_id: number;

  @Field(() => Int)
  assessmentid: number;

  @Field(() => Int)
  sectionid: number;

  @Field({ nullable: true })
  response?: string;

  // Add the employeeid field
  @Field(() => Int)
  employeeid: number;

  // Add the cycleid field
  @Field(() => Int)
  cycleid: number;

  @Field({ nullable: true })
  functionalarea?: string;
}


