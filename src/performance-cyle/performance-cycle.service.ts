import { Injectable, NotFoundException} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PerformanceCycleEntity } from './performance-cycle.entity';
import { PerformanceCycleInput } from './dto/performance-cycle.create';
import { PerformanceCycleUpdate } from './dto/performance-cycle.update';

@Injectable()
export class PerformanceCycleService {
  constructor(
    @InjectRepository(PerformanceCycleEntity)
    private performanceCycleRepository: Repository<PerformanceCycleEntity>,
  ) {}

  async findAll(): Promise<PerformanceCycleEntity[]> {
    const cycles = await this.performanceCycleRepository.find();
      console.log('data from db', cycles);
      return cycles;
}

  findOne(tenantid: number, cycleId: number): Promise<PerformanceCycleEntity | undefined> {
    return this.performanceCycleRepository.findOne({ where: { tenantid: tenantid, cycleid: cycleId } });
  }

  create(performanceCycle: PerformanceCycleInput): Promise<PerformanceCycleEntity> {
    console.log('performance cycle create', performanceCycle.startdate,performanceCycle.enddate);
    if (performanceCycle.startdate > performanceCycle.enddate) {
      console.log('start date is greater than end date');
    }
    return this.performanceCycleRepository.save(performanceCycle);
  }

  async update(tenantId: number, cycleId : number,updateData: PerformanceCycleUpdate): Promise<PerformanceCycleEntity> {
    const cycleToUpdate = await this.performanceCycleRepository.findOne({ where: { tenantid: tenantId, cycleid: cycleId } });
  
    if (cycleToUpdate) {
      await this.performanceCycleRepository.save(updateData);
    }
    return this.performanceCycleRepository.findOne({ where: { tenantid: tenantId, cycleid: cycleId } });
  }

  async delete(tenantId : number, cycleId : number): Promise<void> {
    const result = await this.performanceCycleRepository.delete({ tenantid: tenantId, cycleid: cycleId });
    if (result.affected === 0) {
        throw new NotFoundException(`Employee Self-Assessment with Tenant ID ${tenantId} and Assessment ID ${cycleId} not found`);
    }  }
}
