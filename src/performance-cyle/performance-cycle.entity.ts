import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from 'typeorm';
//import { CustomDateColumn } from '../common/CustomDecorators/CustomTypeORMDecorators';

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

    @Column({ nullable: true })
    startdate: Date;

    @Column({ nullable: true })
    enddate: Date;

    @Column({ length: 50, nullable: true })
    status: string;

    @Column({ type: 'text', nullable: true })
    description: string;
}
