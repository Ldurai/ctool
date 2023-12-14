import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PerformanceCycleType {
    @Field(type => Int)
    tenantid: number;

    @Field(type => Int)
    cycleid: number;

    @Field({ nullable: true })
    cyclename: string;

    @Field({ nullable: true })
    cyclerange: string;

    @Field({ nullable: true })
    startdate: Date;

    @Field({ nullable: true })
    enddate: Date;

    @Field({ nullable: true })
    status: string;

    @Field({ nullable: true })
    description: string;
}
