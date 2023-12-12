import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmployeeSelfAssessmentSectionsEntity } from './employee-self-assessment-sections.entity';
import { EmployeeSelfAssessmentSectionInput } from './dto/employee-self-assessment-sections.input';

@Injectable()
export class EmployeeSelfAssessmentSectionsService {
    constructor(
        @InjectRepository(EmployeeSelfAssessmentSectionsEntity)
        private repository: Repository<EmployeeSelfAssessmentSectionsEntity>,
    ) {}

    // Fetch all sections
    async findAll(): Promise<EmployeeSelfAssessmentSectionsEntity[]> {
        return await this.repository.find();
    }

    // Fetch a single section by composite key
    async findOne(tenantId: number, assessmentId: number, sectionId: number): Promise<EmployeeSelfAssessmentSectionsEntity> {
        return await this.repository.findOne({ where: { tenant_id: tenantId, assessmentid: assessmentId, sectionid: sectionId } });
    }

    // Create a new section
    async create(input: EmployeeSelfAssessmentSectionInput): Promise<EmployeeSelfAssessmentSectionsEntity> {
        const newSection = this.repository.create(input);
        return await this.repository.save(newSection);
    }
   

    // Update an existing section
    async update(tenantId: number, assessmentId: number, sectionId: number,input: EmployeeSelfAssessmentSectionInput): Promise<EmployeeSelfAssessmentSectionsEntity> {
        console.log("entering update for sections in service");

        const sectionToUpdate = await this.findOne(tenantId,assessmentId,sectionId);
        if (!sectionToUpdate) throw new Error('Section not found');

        Object.assign(sectionToUpdate,input);
        console.log("entering update for sections in service");
        return await this.repository.save(sectionToUpdate);
    }

   
    // Delete a section
    async delete(tenantId: number, assessmentId: number, sectionId: number): Promise<void> {
        const result = await this.repository.delete({ tenant_id: tenantId, assessmentid: assessmentId, sectionid: sectionId });
        if (result.affected === 0) {
            throw new Error('Section not found or not deleted');
        }
    }
}
