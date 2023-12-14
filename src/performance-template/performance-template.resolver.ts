
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
    async performanceTemplate(@Args('templateId', { type: () => Int }) templateId: number) {
        return this.performanceTemplateService.findOne(templateId);
    }

    @Mutation(returns => PerformanceTemplateType)
    async createPerformanceTemplate(@Args('PerformanceTemplateInput') PerformanceTemplateInput: PerformanceTemplateInput) {
        return this.performanceTemplateService.create(PerformanceTemplateInput);
    }

    @Mutation(returns => PerformanceTemplateType)
    async updatePerformanceTemplate(
        @Args('id', { type: () => Int }) id: number,
        @Args('updatePerformanceTemplateInput') PerformanceTemplateInput: PerformanceTemplateInput,
    ) {
        return this.performanceTemplateService.update(id, PerformanceTemplateInput);
    }
}
