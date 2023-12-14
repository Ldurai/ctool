import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PerformanceCycleService } from './performance-cycle.service';
import { PerformanceCycleType } from './dto/performance-cycle.type';
import { PerformanceCycleInput } from './dto/performance-cycle.input';

@Resolver(of => PerformanceCycleType)
export class PerformanceCycleResolver {
  constructor(private readonly performanceCycleService: PerformanceCycleService) {}

  @Query(returns => [PerformanceCycleType])
async performanceCycles(): Promise<PerformanceCycleType[]> {
  const cycles = await this.performanceCycleService.findAll();

  // Transforming each cycle's date strings to Date objects
  const transformedCycles = cycles.map(cycle => ({
    ...cycle,
    startdate: cycle.startdate ? new Date(cycle.startdate) : null,
    enddate: cycle.enddate ? new Date(cycle.enddate) : null
  }));

  console.log('Transformed Cycles:', transformedCycles);
return transformedCycles;
}

  @Query(returns => PerformanceCycleType)
  async performanceCycle(@Args('tenantId') tenantId: number, @Args('cycleId') cycleId : number): Promise<PerformanceCycleType> {
    const cycle = await this.performanceCycleService.findOne(tenantId,cycleId);
    if (!cycle) {
      throw new Error('Performance Cycle not found');
    }
    return cycle;
  }

  @Mutation(returns => PerformanceCycleType)
  async createPerformanceCycle(@Args('performanceCycleInput') performanceCycleInput: PerformanceCycleInput): Promise<PerformanceCycleType> {
    // Add validation or transformation logic if needed
    return this.performanceCycleService.create(performanceCycleInput);
  }

  @Mutation(returns => PerformanceCycleType)
  async updatePerformanceCycle(
    @Args('tenantid') tenantId: number,
    @Args('cycleId')  cycleID: number,
    @Args('performanceCycleInput') performanceCycleInput: PerformanceCycleInput,
  ): Promise<PerformanceCycleType> {
    const cycle = await this.performanceCycleService.findOne(tenantId,cycleID);
    if (!cycle) {
      throw new Error('Performance Cycle not found');
    }
    return this.performanceCycleService.update(tenantId,cycleID, performanceCycleInput);
  }

  @Mutation(returns => Boolean)
  async deletePerformanceCycle(@Args('tenantId') tenantId: number,
    @Args ('cycleId') cycleID:number
    ): Promise<boolean> {
    const cycle = await this.performanceCycleService.findOne(tenantId,cycleID);
    if (!cycle) {
      throw new Error('Performance Cycle not found');
    }
    await this.performanceCycleService.delete(tenantId,cycleID);
    return true;
  }
}
