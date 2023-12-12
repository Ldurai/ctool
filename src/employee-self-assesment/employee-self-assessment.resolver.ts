import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { EmployeeSelfAssessmentService } from './employee-self-assessment.service';
import { EmployeeSelfAssessmentType } from './dto/employee-self-assessment.type';
import { EmployeeSelfAssessmentInput } from './dto/employee-self-assessment.input';
import { Int } from '@nestjs/graphql';

@Resolver(() => EmployeeSelfAssessmentType)
export class EmployeeSelfAssessmentResolver {
    constructor(private readonly service: EmployeeSelfAssessmentService) {}

    @Query(() => [EmployeeSelfAssessmentType])
    async employeeSelfAssessments() {
        return this.service.findAll();
    }

    @Query(() => EmployeeSelfAssessmentType)
    async employeeSelfAssessment(
        @Args('tenantId', { type: () => Int }) tenantId: number,
        @Args('assessmentId', { type: () => Int }) assessmentId: number
    ) {
        return this.service.findOne(tenantId, assessmentId);
    }

    @Mutation(() => EmployeeSelfAssessmentType)
    async createEmployeeSelfAssessment(
        @Args('input') input: EmployeeSelfAssessmentInput
    ) {
        return this.service.create(input);
    }

    @Mutation(() => EmployeeSelfAssessmentType)
    async updateEmployeeSelfAssessment(
        @Args('tenantId', { type: () => Int }) tenantId: number,
        @Args('assessmentId', { type: () => Int }) assessmentId: number,
        @Args('input') input: EmployeeSelfAssessmentInput
    ) {
        return this.service.update(tenantId, assessmentId, input);
    }

    @Mutation(() => Boolean)
    async deleteEmployeeSelfAssessment(
        @Args('tenantId', { type: () => Int }) tenantId: number,
        @Args('assessmentId', { type: () => Int }) assessmentId: number
    ) {
        await this.service.delete(tenantId, assessmentId);
        return true; // or handle based on service response
    }
}
