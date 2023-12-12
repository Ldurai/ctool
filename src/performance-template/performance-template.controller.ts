import { Controller, Get, Post, Put, Delete, Body, Param, Res, HttpStatus } from '@nestjs/common';
import { PerformanceTemplateService } from './performance-template.service';
import { PerformanceTemplateModel } from './models/performance-template.model';
import { Response } from 'express';

@Controller('performance-template')
export class PerformanceTemplateController {
    constructor(private readonly service: PerformanceTemplateService) {}

    @Get()
    async getAll(@Res() res: Response) {
        const templates = await this.service.findAll();
        return res.status(HttpStatus.OK).json(templates);
    }

    @Get(':templateId')
    async getOne(@Param('templateId') templateId: number, @Res() res: Response) {
        const template = await this.service.findOne(templateId);
        return res.status(HttpStatus.OK).json(template);
    }

    @Post()
    async create(@Body() templateData: PerformanceTemplateModel, @Res() res: Response) {
        const newTemplate = await this.service.create(templateData);
        return res.status(HttpStatus.CREATED).json(newTemplate);
    }

    @Put(':templateId')
    async update(@Param('templateId') templateId: number, @Body() templateData: PerformanceTemplateModel, @Res() res: Response) {
        const updatedTemplate = await this.service.update(templateId, templateData);
        return res.status(HttpStatus.OK).json(updatedTemplate);
    }

    @Delete(':templateId')
    async delete(@Param('templateId') templateId: number, @Res() res: Response) {
        await this.service.delete(templateId);
        return res.status(HttpStatus.OK).json({ message: 'Template deleted successfully' });
    }
}
