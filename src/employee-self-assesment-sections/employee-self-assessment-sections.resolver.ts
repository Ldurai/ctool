import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { EmployeeSelfAssessmentSectionsType } from './dto/employee-self-assessment-sections.type';
import { EmployeeSelfAssessmentSectionsService } from './employee-self-assessment-sections.service';
import { EmployeeSelfAssessmentSectionInput } from './dto/employee-self-assessment-sections.input';

@Resolver(() => EmployeeSelfAssessmentSectionsType)
export class EmployeeSelfAssessmentSectionsResolver {
    constructor(
        private readonly employeeSelfAssessmentSectionsService: EmployeeSelfAssessmentSectionsService
    ) {}

    @Query(() => [EmployeeSelfAssessmentSectionsType])
    async employeeSelfAssessmentSections(): Promise<EmployeeSelfAssessmentSectionsType[]> {
        return this.employeeSelfAssessmentSectionsService.findAll();
    }

    @Query(() => EmployeeSelfAssessmentSectionsType)
    async employeeSelfAssessmentSection(
        @Args('tenantId') tenantId: number,
        @Args('assessmentId') assessmentId: number,
        @Args('sectionId') sectionId: number,
    ): Promise<EmployeeSelfAssessmentSectionsType> {
        return this.employeeSelfAssessmentSectionsService.findOne(tenantId, assessmentId, sectionId);
    }

    @Mutation(() => EmployeeSelfAssessmentSectionsType)
    async createEmployeeSelfAssessmentSection(
        @Args('input') input: EmployeeSelfAssessmentSectionInput
    ): Promise<EmployeeSelfAssessmentSectionsType> {
        return this.employeeSelfAssessmentSectionsService.create(input);
    }

    @Mutation(() => EmployeeSelfAssessmentSectionsType)
    async updateEmployeeSelfAssessmentSection(
        @Args('tenantId') tenantId: number,
        @Args('assessmentId') assessmentId: number,
        @Args('sectionId') sectionId: number,
        @Args('input') input: EmployeeSelfAssessmentSectionInput
    ): Promise<EmployeeSelfAssessmentSectionsType> {
        return this.employeeSelfAssessmentSectionsService.update(tenantId, assessmentId, sectionId, input);
    }

    @Mutation(() => Boolean)
    async deleteEmployeeSelfAssessmentSection(
        @Args('tenantId') tenantId: number,
        @Args('assessmentId') assessmentId: number,
        @Args('sectionId') sectionId: number,
    ): Promise<boolean> {
        await this.employeeSelfAssessmentSectionsService.delete(tenantId, assessmentId, sectionId);
        return true;
    }
}
