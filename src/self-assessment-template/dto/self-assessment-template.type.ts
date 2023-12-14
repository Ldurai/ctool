// src/self-assessment-template/self-assessment-template.type.ts

import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType('SelfAssessmentTemplate')
export class SelfAssessmentTemplateType {
    @Field(type => Int)
    sectionid: number;

    @Field(type => Int)
    tenantid: number;

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
