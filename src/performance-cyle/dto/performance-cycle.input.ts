import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class PerformanceCycleInput {
    @Field(type => Int, { nullable: true }) // Nullable for updates
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
