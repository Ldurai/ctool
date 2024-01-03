import { Entity, PrimaryColumn, PrimaryGeneratedColumn, Column } from 'typeorm';
import { CustomDateColumn } from 'src/common/CustomDecorators/CustomTypeORMDecorators';
import { IsNumber, IsDate, IsString, IsNotEmpty, Length } from 'class-validator';

@Entity('employeeselfassessment')
export class EmployeeSelfAssessmentEntity {
    @PrimaryColumn()
    @IsNumber()
    @IsNotEmpty()
    tenant_id: number;

    @PrimaryGeneratedColumn()
    @IsNumber()
    assessmentid: number;

    @Column()
    @IsNumber()
    @IsNotEmpty()
    employeeid: number;

    @CustomDateColumn()
    @IsDate()
    assessmentdate: Date;

    @Column()
    @IsNumber()
    cycleid: number; // New non-nullable column for the foreign key

    @Column({ length: 500, nullable: true })
    @IsString()
    @Length(0, 500)
    strengths?: string;

    @Column({ length: 500, nullable: true })
    @IsString()
    @Length(0, 500)
    weaknesses?: string;

    @Column({ length: 500, nullable: true })
    @IsString()
    @Length(0, 500)
    goals?: string;

    @Column({ nullable: true })
    @IsNumber()
    managerfeedbackid?: number;

    @Column({ length: 1000, nullable: true })
    @IsString()
    @Length(0, 1000)
    additionalcomments?: string;
}
