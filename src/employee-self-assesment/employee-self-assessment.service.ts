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

    async findOne(tenantId: number, employee_id: number, assessmentId: number, cycleId: number): Promise<EmployeeSelfAssessmentEntity> {
        const assessment = await this.repository.findOne({ where: { tenant_id: tenantId, employeeid: employee_id, cycleid:cycleId, assessmentid: assessmentId } });
        if (!assessment) {
            throw new NotFoundException(`Employee Self-Assessment with Tenant ID ${tenantId}, Employee ID ${employee_id}, Cycle Id, ${cycleId} and Assessment Id ${assessmentId} not found`);
        }
        return assessment;
    }
    async findByEmployeeId(tenantId: number, employeeId: number): Promise<EmployeeSelfAssessmentEntity> {
        const assessment = await this.repository.findOne({ where: { tenant_id: tenantId, employeeid: employeeId } });
        if (!assessment) {
            throw new NotFoundException(`Employee Self-Assessment with employee ID ${employeeId} not found`);
        }
        return assessment;
    }

    async findByEmployeeByCycleId(tenantId: number, employeeId: number, cycleID: number, assessmentId: number): Promise<EmployeeSelfAssessmentEntity> {
        const assessment = await this.repository.findOne({ where: { tenant_id: tenantId, employeeid: employeeId, cycleid:cycleID, assessmentid:assessmentId} });
        if (!assessment) {
            throw new NotFoundException(`Employee Self-Assessment Tenant ID ${tenantId}, Employee ID ${employeeId}, Cycle ID ${cycleID} and Assessment Id ${assessmentId} not found`);
        }
        return assessment;
    }
    async create(input: EmployeeSelfAssessmentInput): Promise<EmployeeSelfAssessmentEntity> {
        const newAssessment = this.repository.create(input);
        return await this.repository.save(newAssessment);
    }

    async update(tenantId: number, employeeId: number,  assessmentId: number, cycleId: number,input: EmployeeSelfAssessmentInput): Promise<EmployeeSelfAssessmentEntity> {
        const assessment = await this.findOne(tenantId, employeeId,  assessmentId,cycleId,);
        Object.assign(assessment, input);

        const results =  await this.repository.save(assessment);
        console.log ('updated data', results);
        if (!results) {
            console.log ('not updated');
        }
        return results;
    }

    async delete(tenantId: number, employeeId: number, cycleId: number, assessmentId: number): Promise<Boolean> {
        const result = await this.repository.delete({ tenant_id: tenantId, employeeid: employeeId, cycleid: cycleId, assessmentid: assessmentId });
        if (result.affected === 0) {
            throw new NotFoundException(`Employee Self-Assessment with Tenant ID ${tenantId}, Employee ID ${employeeId},Cycle ID ${cycleId} and Assessment ID ${assessmentId} not found`);
        }
        return true;
    }
}
