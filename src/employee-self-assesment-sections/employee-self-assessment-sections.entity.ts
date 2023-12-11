import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from 'typeorm';

@Entity('employeeselfassessmentsections')
export class EmployeeSelfAssessmentSectionsEntity {
    @PrimaryColumn()
    tenant_id: number;

    @PrimaryColumn()
    assessmentid: number;

    @PrimaryColumn()
    sectionid: number;

    @Column({ type: 'text', nullable: true })
    response: string;
}
