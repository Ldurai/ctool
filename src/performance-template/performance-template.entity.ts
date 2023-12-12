import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('performancetemplate')
export class PerformanceTemplateEntity {
    @PrimaryGeneratedColumn()
    templateid: number;

    @Column()
    tenantid: number;

    @Column({ length: 255, nullable: true })
    templatename: string;

    @Column({ type: 'text', nullable: true })
    templatedescription: string;
}
