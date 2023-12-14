import { Controller, Get, Post, Put, Delete, Body, Param, Res, HttpStatus } from '@nestjs/common';
import { PerformanceCycleService } from './performance-cycle.service';
import { PerformanceCycleModel } from './models/performance-cycle.model';
import { Response } from 'express';

@Controller('performance-cycle')
export class PerformanceCycleController {
    constructor(private readonly service: PerformanceCycleService) {}

    @Get()
    async getAll(@Res() res: Response) {
        const cycles = await this.service.findAll();
        console.log('in controller', cycles);

        return res.status(HttpStatus.OK).json(cycles);
    }

    @Get(':tenantId/:cycleId')
    async getOne(@Param('tenantId') tenantId: number, @Param('cycleId') cycleId: number, @Res() res: Response) {
        const cycle = await this.service.findOne(tenantId, cycleId);
        return res.status(HttpStatus.OK).json(cycle);
    }

    @Post()
    async create(@Body() performanceCycleData: PerformanceCycleModel, @Res() res: Response) {
        const newCycle = await this.service.create(performanceCycleData);
        return res.status(HttpStatus.CREATED).json(newCycle);
    }

    @Put(':tenantId/:cycleId')
    async update(@Param('tenantId') tenantId: number, @Param('cycleId') cycleId: number, @Body() performanceCycleData: PerformanceCycleModel, @Res() res: Response) {
        const updatedCycle = await this.service.update(tenantId, cycleId, performanceCycleData);
        return res.status(HttpStatus.OK).json(updatedCycle);
    }

    @Delete(':tenantId/:cycleId')
    async delete(@Param('tenantId') tenantId: number, @Param('cycleId') cycleId: number,
    @Res() res: Response) {
        await this.service.delete(tenantId, cycleId);
        return res.status(HttpStatus.OK).json({ message: 'Performance Cycle deleted successfully' });
    }
}
