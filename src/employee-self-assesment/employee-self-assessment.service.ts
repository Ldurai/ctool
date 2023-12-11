import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmployeeSelfAssessmentEntity } from './employee-self-assessment.entity';
import { EmployeeSelfAssessmentModel } from '././models/employee-self-assessment.model';

@Injectable()
export class EmployeeSelfAssessmentService {
    constructor(
        @InjectRepository(EmployeeSelfAssessmentEntity)
        private employeeSelfAssessmentRepository: Repository<EmployeeSelfAssessmentEntity>,
    ) {}

    // Fetch all assessments
    async findAll(): Promise<EmployeeSelfAssessmentEntity[]> {
        return await this.employeeSelfAssessmentRepository.find();
    }
    //Fetch assessments by employee ID
    async findByEmployeeId(employeeId: number): Promise<EmployeeSelfAssessmentEntity[]> {
        console.log('enterinng assesement service');

        return await this.employeeSelfAssessmentRepository.find({
            where: { employeeid: employeeId }
        });
    }

    // Fetch a single assessment by ID
    async findOne(assessmentId: number, tenantId: number): Promise<EmployeeSelfAssessmentEntity> {
        return await this.employeeSelfAssessmentRepository.findOne({ where: { assessmentid: assessmentId, tenant_id: tenantId } });
    }

    // Create a new assessment
    async create(assessment: EmployeeSelfAssessmentModel): Promise<EmployeeSelfAssessmentEntity> {
        return await this.employeeSelfAssessmentRepository.save(assessment);
    }

    // Update an existing assessment
    async update(assessmentId: number, tenantId: number, assessmentData: EmployeeSelfAssessmentModel): Promise<EmployeeSelfAssessmentEntity> {
        const assessmentToUpdate = await this.employeeSelfAssessmentRepository.findOne({ where: { assessmentid: assessmentId, tenant_id: tenantId } });
        if (!assessmentToUpdate) throw new Error('Assessment not found');

        Object.assign(assessmentToUpdate, assessmentData);
        return await this.employeeSelfAssessmentRepository.save(assessmentToUpdate);
    }

    // Delete an assessment
    async delete(assessmentId: number, tenantId: number): Promise<void> {
        const result = await this.employeeSelfAssessmentRepository.delete({ assessmentid: assessmentId, tenant_id: tenantId });
        if (result.affected === 0) {
            throw new Error('Assessment not found or not deleted');
        }
    }
}
