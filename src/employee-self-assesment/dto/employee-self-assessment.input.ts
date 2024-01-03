import { InputType, Field, Int } from '@nestjs/graphql';
import { IsNumber, IsDate, IsOptional, IsString, Length } from 'class-validator';

@InputType()
export class EmployeeSelfAssessmentInput {
    @Field(() => Int)
    @IsNumber()
    tenant_id: number;

    @Field(() => Int)
    @IsNumber()
    employeeid: number;

    @Field(() => Int)
    @IsNumber()
    assessmentid: number;

    @Field()
    @IsDate()
    assessmentdate: Date;

    @Field(() => Int)
    @IsNumber()
    cycleid: number; // Added as a required field

    @Field({ nullable: true })
    @IsString()
    @Length(0, 500)
    @IsOptional()
    strengths?: string;

    @Field({ nullable: true })
    @IsString()
    @Length(0, 500)
    @IsOptional()
    weaknesses?: string;

    @Field({ nullable: true })
    @IsString()
    @Length(0, 500)
    @IsOptional()
    goals?: string;

    @Field(() => Int, { nullable: true })
    @IsNumber()
    @IsOptional()
    managerfeedbackid?: number;

    @Field({ nullable: true })
    @IsString()
    @Length(0, 1000)
    @IsOptional()
    additionalcomments?: string;
}
