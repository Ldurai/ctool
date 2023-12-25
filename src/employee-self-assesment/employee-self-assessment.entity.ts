import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from 'typeorm';
import { CustomDateColumn } from '../common/CustomDecorators/CustomTypeORMDecorators';

@Entity('employeeselfassessment')
export class EmployeeSelfAssessmentEntity {
    @PrimaryColumn()
    tenant_id: number;

    @PrimaryGeneratedColumn()
    assessmentid: number;

    @Column()
    employeeid: number;

    @CustomDateColumn()
    assessmentdate: Date;

    @Column({ nullable: true })
    performancecycleid: number;

    @Column({ length: 500, nullable: true })
    strengths: string;

    @Column({ length: 500, nullable: true })
    weaknesses: string;

    @Column({ length: 500, nullable: true })
    goals: string;

    @Column({ nullable: true })
    managerfeedbackid: number;

    @Column({ length: 1000, nullable: true })
    additionalcomments: string;
}
