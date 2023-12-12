import { Controller, Get, Post, Put, Delete, Body, Param, Res, HttpStatus } from '@nestjs/common';
import { SelfAssessmentTemplateService } from './self-assessment-template.service';
import { SelfAssessmentTemplateModel } from './self-assessment-template.model';
import { Response } from 'express';

@Controller('self-assessment-template')
export class SelfAssessmentTemplateController {
    constructor(private readonly service: SelfAssessmentTemplateService) {}

    @Get()
    async getAll(@Res() res: Response) {
        const templates = await this.service.findAll();
        return res.status(HttpStatus.OK).json(templates);
    }

    @Get(':tenantId/:sectionId')
    async getOne(@Param('tenantId') tenantId: number, @Param('sectionId') sectionId: number, @Res() res: Response) {
        const template = await this.service.findOne(tenantId, sectionId);
        return res.status(HttpStatus.OK).json(template);
    }

    @Post()
    async create(@Body() templateData: SelfAssessmentTemplateModel, @Res() res: Response) {
        const newTemplate = await this.service.create(templateData);
        return res.status(HttpStatus.CREATED).json(newTemplate);
    }

    @Put(':tenantId/:sectionId')
    async update(@Param('tenantId') tenantId: number, @Param('sectionId') sectionId: number, @Body() templateData: SelfAssessmentTemplateModel, @Res() res: Response) {
        const updatedTemplate = await this.service.update(tenantId, sectionId, templateData);
        return res.status(HttpStatus.OK).json(updatedTemplate);
    }

    @Delete(':tenantId/:sectionId')
    async delete(@Param('tenantId') tenantId: number, @Param('sectionId') sectionId: number, @Res() res: Response) {
        await this.service.delete(tenantId, sectionId);
        return res.status(HttpStatus.OK).json({ message: 'Template deleted successfully' });
    }
}
