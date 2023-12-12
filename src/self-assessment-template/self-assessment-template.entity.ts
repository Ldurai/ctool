import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from 'typeorm';

@Entity('selfassessmenttemplate')
export class SelfAssessmentTemplateEntity {
    @PrimaryColumn()
    tenantid: number;

    @PrimaryGeneratedColumn()
    sectionid: number;

    @Column({ type: 'enum', enum: ['functionalareatype1', 'functionalareatype2'], nullable: false }) // Adjust enum values according to your 'functionalareatype'
    functionalarea: string;

    @Column({ nullable: true })
    level: number;

    @Column({ length: 255 })
    sectiontitle: string;

    @Column()
    ismandatory: boolean;

    @Column({ type: 'text', nullable: true })
    sectiondetails: string;
}
