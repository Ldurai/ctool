import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class EmployeeSelfAssessmentType {
    @Field(() => ID)
    assessmentid: number;

    @Field(() => Int)
    tenant_id: number;

    @Field(() => Int)
    employeeid: number;

    @Field()
    assessmentdate: Date;

    @Field(() => Int, { nullable: true })
    performancecycleid?: number;

    @Field({ nullable: true })
    strengths?: string;

    @Field({ nullable: true })
    weaknesses?: string;

    @Field({ nullable: true })
    goals?: string;

    @Field(() => Int, { nullable: true })
    managerfeedbackid?: number;

    @Field({ nullable: true })
    additionalcomments?: string;
}
