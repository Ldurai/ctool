import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmployeeSelfAssessmentSectionsEntity } from './employee-self-assessment-sections.entity';
import { EmployeeSelfAssessmentSectionsModel } from './models/employee-self-assessment-sections.model';

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
    async create(section: EmployeeSelfAssessmentSectionsModel): Promise<EmployeeSelfAssessmentSectionsEntity> {
        return await this.repository.save(section);
    }

    // Update an existing section
    async update(tenantId: number, assessmentId: number, sectionId: number, sectionData: EmployeeSelfAssessmentSectionsModel): Promise<EmployeeSelfAssessmentSectionsEntity> {
        const sectionToUpdate = await this.repository.findOne({ where: { tenant_id: tenantId, assessmentid: assessmentId, sectionid: sectionId } });
        if (!sectionToUpdate) throw new Error('Section not found');

        Object.assign(sectionToUpdate, sectionData);
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
