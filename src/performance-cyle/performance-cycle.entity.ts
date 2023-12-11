import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from 'typeorm';

@Entity('performancecycle')
export class PerformanceCycleEntity {
    @PrimaryColumn()
    tenantid: number;

    @PrimaryGeneratedColumn()
    cycleid: number;

    @Column({ length: 255, nullable: true })
    cyclename: string;

    @Column({ length: 100, nullable: true })
    cyclerange: string;

    @Column({ type: 'date', nullable: true })
    startdate: Date;

    @Column({ type: 'date', nullable: true })
    enddate: Date;

    @Column({ length: 50, nullable: true })
    status: string;

    @Column({ type: 'text', nullable: true })
    description: string;
}
