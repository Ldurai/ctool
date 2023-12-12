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
}

