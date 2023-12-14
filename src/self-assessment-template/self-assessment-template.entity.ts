import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('selfassessmenttemplate')
export class SelfAssessmentTemplateEntity {

    @PrimaryGeneratedColumn()
    sectionid: number;

    @Column()
    tenantid: number;

    @Column()
    functionalarea: string;

    @Column({ nullable: true })
    level: number;

    @Column()
    sectiontitle: string;

    @Column()
    ismandatory: boolean;

    @Column({ type: 'text', nullable: true })
    sectiondetails: string;

}
