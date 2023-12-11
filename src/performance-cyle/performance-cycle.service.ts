import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PerformanceCycleEntity } from './performance-cycle.entity';
import { PerformanceCycleModel } from './models/performance-cycle.model';

@Injectable()
export class PerformanceCycleService {
    constructor(
        @InjectRepository(PerformanceCycleEntity)
        private repository: Repository<PerformanceCycleEntity>,
    ) {}

    async findAll(): Promise<PerformanceCycleEntity[]> {
        return await this.repository.find();
    }

    async findOne(tenantId: number, cycleId: number): Promise<PerformanceCycleEntity> {
        const performanceCycle = await this.repository.findOne({ where: { tenantid: tenantId, cycleid: cycleId } });
        if (!performanceCycle) {
            throw new NotFoundException(`Performance Cycle with Tenant ID ${tenantId} and Cycle ID ${cycleId} not found`);
        }
        return performanceCycle;
    }

    async create(performanceCycleData: PerformanceCycleModel): Promise<PerformanceCycleEntity> {
        return await this.repository.save(performanceCycleData);
    }

    async update(tenantId: number, cycleId: number, performanceCycleData: PerformanceCycleModel): Promise<PerformanceCycleEntity> {
        const performanceCycle = await this.findOne(tenantId, cycleId);
        Object.assign(performanceCycle, performanceCycleData);
        return await this.repository.save(performanceCycle);
    }

    async delete(tenantId: number, cycleId: number): Promise<void> {
        const result = await this.repository.delete({ tenantid: tenantId, cycleid: cycleId });
        if (result.affected === 0) {
            throw new NotFoundException(`Performance Cycle with Tenant ID ${tenantId} and Cycle ID ${cycleId} not found`);
        }
    }
}
