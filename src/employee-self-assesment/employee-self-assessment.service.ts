import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmployeeSelfAssessmentEntity } from './employee-self-assessment.entity';
import { EmployeeSelfAssessmentInput } from './dto/employee-self-assessment.input';

@Injectable()
export class EmployeeSelfAssessmentService {
    constructor(
        @InjectRepository(EmployeeSelfAssessmentEntity)
        private readonly repository: Repository<EmployeeSelfAssessmentEntity>
    ) {}

    async findAll(): Promise<EmployeeSelfAssessmentEntity[]> {
        return await this.repository.find();
    }

    async findOne(tenantId: number, assessmentId: number): Promise<EmployeeSelfAssessmentEntity> {
        const assessment = await this.repository.findOne({ where: { tenant_id: tenantId, assessmentid: assessmentId } });
        if (!assessment) {
            throw new NotFoundException(`Employee Self-Assessment with Tenant ID ${tenantId} and Assessment ID ${assessmentId} not found`);
        }
        return assessment;
    }
    async findByEmployeeId(employee_id: number): Promise<EmployeeSelfAssessmentEntity> {
        const assessment = await this.repository.findOne({ where: { employeeid: employee_id } });
        if (!assessment) {
            throw new NotFoundException(`Employee Self-Assessment with employee ID ${employee_id} not found`);
        }
        return assessment;
    }

    async create(input: EmployeeSelfAssessmentInput): Promise<EmployeeSelfAssessmentEntity> {
        const newAssessment = this.repository.create(input);
        return await this.repository.save(newAssessment);
    }

    async update(tenantId: number, assessmentId: number, input: EmployeeSelfAssessmentInput): Promise<EmployeeSelfAssessmentEntity> {
        const assessment = await this.findOne(tenantId, assessmentId);
        Object.assign(assessment, input);
        return await this.repository.save(assessment);
    }

    async delete(tenantId: number, assessmentId: number): Promise<void> {
        const result = await this.repository.delete({ tenant_id: tenantId, assessmentid: assessmentId });
        if (result.affected === 0) {
            throw new NotFoundException(`Employee Self-Assessment with Tenant ID ${tenantId} and Assessment ID ${assessmentId} not found`);
        }
    }
}
