import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('employees')
export class EmployeeEntity {
    @Column({ type: 'integer', nullable: true })
    tenant_id: number;

    @PrimaryGeneratedColumn()
    employee_id: number;

    @Column({ length: 255, nullable: true })
    employee_name: string;

    @Column({ length: 20, nullable: true, unique: true })
    employee_code: string;

    @Column({ length: 255, nullable: true })
    employee_photo_link: string;

    @Column({ type: 'date', nullable: true })
    last_promo_date: Date;

    @Column({ type: 'integer', nullable: true })
    job_id: number;

    @Column({ length: 50, nullable: true })
    job_level: string;

    @Column({ length: 50, nullable: true })
    job_function: string;

    @Column({ length: 100, nullable: true })
    job_role: string;

    @Column({ length: 100, nullable: true })
    location: string;

    @Column({ length: 100, nullable: true })
    job_title: string;

    @Column({ type: 'integer', nullable: true })
    department_id: number;

    @Column({ length: 100, nullable: true })
    department_name: string;

    @Column({ type: 'integer', nullable: true })
    manager_id: number;

    @Column({ type: 'date', nullable: true })
    hire_date: Date;
}
