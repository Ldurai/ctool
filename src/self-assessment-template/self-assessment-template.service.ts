import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SelfAssessmentTemplateEntity } from './self-assessment-template.entity';

@Injectable()
export class SelfAssessmentTemplateService {
    constructor(
        @InjectRepository(SelfAssessmentTemplateEntity)
        private repository: Repository<SelfAssessmentTemplateEntity>,
    ) {}
    
    async findAll(): Promise<SelfAssessmentTemplateEntity[]> {
        console.log('entering service');
        const selfAtemp = await this.repository.find();
        console.log('data from db', selfAtemp);
        return await this.repository.find();
    }

    async findOne(tenantId: number, sectionId: number): Promise<SelfAssessmentTemplateEntity> {
        const template = await this.repository.findOne({ where: { tenantid: tenantId, sectionid: sectionId } });
        if (!template) {
            throw new NotFoundException(`Template with Tenant ID ${tenantId} and Section ID ${sectionId} not found`);
        }
        return template;
    }

    async findOneBylevel(tenantId: number,  functionalarea : string, level: number): Promise<SelfAssessmentTemplateEntity> {
        const template = await this.repository.findOne({ where: { tenantid: tenantId, functionalarea : functionalarea,level: level } });
        if (!template) {
            throw new NotFoundException(`Template with Tenant ID ${tenantId} and Section ID ${level} and not found`);
        }
        return template;
    }

    async create(templateData: SelfAssessmentTemplateEntity): Promise<SelfAssessmentTemplateEntity> {
        return await this.repository.save(templateData);
    }

    async update(tenantId: number, sectionId: number, templateData: SelfAssessmentTemplateEntity): Promise<SelfAssessmentTemplateEntity> {
        const template = await this.findOne(tenantId, sectionId);
        Object.assign(template, templateData);
        return await this.repository.save(template);
    }

    async delete(tenantId: number, sectionId: number): Promise<void> {
        const result = await this.repository.delete({ tenantid: tenantId, sectionid: sectionId });
        if (result.affected === 0) {
            throw new NotFoundException(`Template with Tenant ID ${tenantId} and Section ID ${sectionId} not found`);
        }
    }
}
