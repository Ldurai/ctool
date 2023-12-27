// src/self-assessment-template/self-assessment-template.type.ts

import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType('SelfAssessmentTemplate')
export class SelfAssessmentTemplateType {
    @Field({nullable:true})
    sectionid: number;

    @Field({nullable:true})
    tenantid: number;

    @Field({nullable:true})
    functionalarea: string;

    @Field({ nullable: true })
    level: number;

    @Field({nullable:true})
    sectiontitle: string;

    @Field({nullable:true})
    ismandatory: boolean;

    @Field({ nullable: true })
    sectiondetails: string;
}
