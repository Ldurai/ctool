import { InputType, Field, Int } from '@nestjs/graphql';
import { IsDate, IsInt, IsNotEmpty, IsOptional, IsString, Length, Validate } from 'class-validator';
import { IsBeforeConstraint } from 'src/common/CustomDecorators/CustomDateValidation';

@InputType()
export class PerformanceCycleUpdate {
    @Field(type => Int) 
    @IsNotEmpty()
    @IsInt()
    tenantid: number;

    @Field(type => Int) 
    @IsNotEmpty()
    @IsInt()
    cycleid: number;

    @Field()
    @IsOptional()
    @IsString()
    @Length(1, 255)
    cyclename: string;
    
    @Field()
    @IsOptional()
    @IsString()
    @Length(1, 100)
    cyclerange: string;

    @Field({ nullable: true })
    @IsDate()
    @Validate(IsBeforeConstraint,['enddate'])
    startdate: Date;


    @Field({ nullable: true })
    @IsDate()
    enddate: Date;

    @Field({ nullable: true })
    status: string;

    @Field({ nullable: true })
    description: string;
}
