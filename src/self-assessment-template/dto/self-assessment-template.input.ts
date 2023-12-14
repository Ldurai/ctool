// src/self-assessment-template/self-assessment-template.input.ts

import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class SelfAssessmentTemplateInput {
    @Field(type => Int)
    tenantid: number;

    @Field(type => Int)
    sectionid: number;

    @Field()
    functionalarea: string;

    @Field({ nullable: true })
    level: number;

    @Field()
    sectiontitle: string;

    @Field()
    ismandatory: boolean;

    @Field({ nullable: true })
    sectiondetails: string;
}
