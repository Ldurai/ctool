import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PerformanceTemplateEntity } from './performance-template.entity';
import { PerformanceTemplateModel } from './models/performance-template.model';

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

    async findOne(templateId: number): Promise<PerformanceTemplateEntity> {
        const template = await this.repository.findOne({ where: { templateid: templateId } });
        if (!template) {
            throw new NotFoundException(`Template with ID ${templateId} not found`);
        }
        return template;
    }

    async create(templateData: PerformanceTemplateModel): Promise<PerformanceTemplateEntity> {
        return await this.repository.save(templateData);
    }

    async update(templateId: number, templateData: PerformanceTemplateModel): Promise<PerformanceTemplateEntity> {
        const template = await this.findOne(templateId);
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
