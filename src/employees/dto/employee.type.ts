import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class EmployeeType {
    @Field(() => Int, { nullable: true })
    tenant_id?: number;

    @Field(() => Int)
    employee_id: number;

    @Field({ nullable: true })
    employee_name?: string;

    @Field({ nullable: true })
    employee_code?: string;

    @Field({ nullable: true })
    employee_photo_link?: string;

    @Field({ nullable: true })
    last_promo_date?: Date;

    @Field(() => Int, { nullable: true })
    job_id?: number;

    @Field({ nullable: true })
    job_level?: string;

    @Field({ nullable: true })
    job_function?: string;

    @Field({ nullable: true })
    job_role?: string;

    @Field({ nullable: true })
    location?: string;

    @Field({ nullable: true })
    job_title?: string;

    @Field(() => Int, { nullable: true })
    department_id?: number;

    @Field({ nullable: true })
    department_name?: string;

    @Field(() => Int, { nullable: true })
    manager_id?: number;

    @Field({ nullable: true })
    hire_date?: Date;
}
