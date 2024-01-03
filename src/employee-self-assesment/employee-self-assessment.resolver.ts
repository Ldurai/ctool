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
        @Args('employee_id', { type: () => Int }) employeeId: number
    ) {
        return this.service.findByEmployeeId(tenantId, employeeId);
    }
    async employeeSelfAssessmentsByCycleId(
        @Args('tenantId', { type: () => Int }) tenantId: number,
        @Args('employee_id', { type: () => Int }) employeeId: number,
        @Args('cycleId', { type: () => Int }) cycleId: number,
        @Args('assessmentId', { type: () => Int }) assessmentId: number

    ) {
        return this.service.findByEmployeeByCycleId(tenantId, employeeId,cycleId, assessmentId);
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
        @Args('employeeId', { type: () => Int }) employeeId: number,
        @Args('assessmentId', { type: () => Int }) assessmentId: number,
        @Args('cycleId', { type: () => Int }) cycleId: number,
        @Args('input') input: EmployeeSelfAssessmentInput
    ) {
        const results =  this.service.update(tenantId, employeeId, assessmentId, cycleId,input);
        if (!results) {
            throw new Error('Assessment not updated');
        }
        return results; // or handle based on service response
    }

    @Mutation(() => Boolean)
    async deleteEmployeeSelfAssessment(
        @Args('tenantId', { type: () => Int }) tenantId: number,
        @Args('employeeId', { type: () => Int }) employeeId: number,
        @Args('cycleId', { type: () => Int }) cycleId: number,
        @Args('assessmentId', { type: () => Int }) assessmentId: number
    ): Promise<Boolean> {
        const results = await this.service.delete(tenantId, employeeId, cycleId, assessmentId);
        if (!results) {
            throw new Error('Assessment not found nor deleted');
        }
        return true; // or handle based on service response
    }
}
