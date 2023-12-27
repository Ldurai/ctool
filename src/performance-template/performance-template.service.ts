import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PerformanceTemplateEntity } from './performance-template.entity';

@Injectable()
export class PerformanceTemplateService {
    constructor(
        @InjectRepository(PerformanceTemplateEntity)
        private repository: Repository<PerformanceTemplateEntity>,
    ) {}

    async findAll(): Promise<PerformanceTemplateEntity[]> {
        const PerformanceCycleEntity = await this.repository.find();
        console.log('performance template', PerformanceCycleEntity);
        return await this.repository.find();
    }

    async findOne(tenantId: number, templateId: number): Promise<PerformanceTemplateEntity> {
        const template = await this.repository.findOne({ where: { tenantid: tenantId,templateid: templateId } });
        if (!template) {
            throw new NotFoundException(`Template with ID ${templateId} not found`);
        }
        return template;
    }

    async create(templateData: PerformanceTemplateEntity): Promise<PerformanceTemplateEntity> {
        return await this.repository.save(templateData);
    }

    async update(tenantId: number,templateId: number, templateData: PerformanceTemplateEntity): Promise<PerformanceTemplateEntity> {
        const template = await this.findOne(tenantId,templateId);
        Object.assign(template, templateData);
        return await this.repository.save(template);
    }

    async delete(templateId: number): Promise<void> {
        const result = await this.repository.delete({ templateid: templateId });
        if (result.affected === 0) {
            throw new NotFoundException(`Template with ID ${templateId} not found`);
        }
    }
}
