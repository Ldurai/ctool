
import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType('PerformanceTemplate')
export class PerformanceTemplateType {
    @Field(type => Int)
    templateid: number;

    @Field(type => Int)
    tenantid: number;

    @Field({ nullable: true })
    templatename: string;

    @Field({ nullable: true })
    templatedescription: string;
}
