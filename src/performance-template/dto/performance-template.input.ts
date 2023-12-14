
import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class PerformanceTemplateInput {

    @Field()
    templateid: number;

    @Field(type => Int)
    tenantid: number;

    @Field({ nullable: true })
    templatename: string;

    @Field({ nullable: true })
    templatedescription: string;
}


