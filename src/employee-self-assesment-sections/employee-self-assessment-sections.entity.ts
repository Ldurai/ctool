import { Entity, Column, PrimaryColumn } from 'typeorm';

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

    @PrimaryColumn()
    employeeid: number;

    @PrimaryColumn()
    cycleid: number;

    @Column({ type: 'varchar', length: 50, nullable: true })
    functionalarea: string;
}
