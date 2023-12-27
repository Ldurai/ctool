import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from 'typeorm';

@Entity('selfassessmenttemplate')
export class SelfAssessmentTemplateEntity {

    @PrimaryColumn()
    sectionid: number;

    @Column({nullable: true})
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
