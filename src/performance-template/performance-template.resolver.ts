
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PerformanceTemplateType } from './dto/performance-template.type';
import { PerformanceTemplateService } from './performance-template.service';
import { PerformanceTemplateInput } from './dto/performance-template.input';

@Resolver(of => PerformanceTemplateType)
export class PerformanceTemplateResolver {
    constructor(private performanceTemplateService: PerformanceTemplateService) {}
    
    @Query(() => [PerformanceTemplateType])
    async performanceTemplates(): Promise<PerformanceTemplateType[]> {
        return this.performanceTemplateService.findAll();
    }

    @Query(returns => PerformanceTemplateType)
    async performanceTemplate(
        @Args('tenantId', { type: () => Int }) tenantId: number,
        @Args('templateId', { type: () => Int }) templateId: number)
    {
        return await this.performanceTemplateService.findOne(tenantId,templateId);
    }

    @Mutation(returns => PerformanceTemplateType)
    async createPerformanceTemplate(@Args('PerformanceTemplateInput') PerformanceTemplateInput: PerformanceTemplateInput) {
        return await this.performanceTemplateService.create(PerformanceTemplateInput);
    }

    @Mutation(returns => PerformanceTemplateType)
    async updatePerformanceTemplate(
        @Args('tenantId', { type: () => Int }) tenantId: number,
        @Args('templateId', { type: () => Int }) templateId: number,
        @Args('updatePerformanceTemplateInput') PerformanceTemplateInput: PerformanceTemplateInput,
    ) {
        return this.performanceTemplateService.update(tenantId, templateId,PerformanceTemplateInput);
    }
}
