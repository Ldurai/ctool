import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SelfAssessmentTemplateService } from './self-assessment-template.service';
import { SelfAssessmentTemplateType } from './dto/self-assessment-template.type';
import { SelfAssessmentTemplateInput } from './dto/self-assessment-template.input';

@Resolver(of => SelfAssessmentTemplateType)
export class SelfAssessmentTemplateResolver {
  constructor(private selfAssessmentTemplateService: SelfAssessmentTemplateService) {}

  @Query(() => [SelfAssessmentTemplateType])
    async selfAssessmentTemplates(): Promise<SelfAssessmentTemplateType[]> {
        return this.selfAssessmentTemplateService.findAll();
    }
 
  @Query(returns => SelfAssessmentTemplateType)
  async selfAssessmentTemplate(@Args('tenantid', { type: () => Int }) tenantid: number,
    @Args('sectionid', { type: () => Int }) sectionid: number,
    
    ) {
    return this.selfAssessmentTemplateService.findOne(tenantid,sectionid);
  }

  @Query(returns => SelfAssessmentTemplateType)
  async selfAssessmentTemplateBylevel(@Args('tenantid', { type: () => Int }) tenantid: number,
    @Args('functionalarea', { type: () => String }) functionalarea : string,
    @Args('level', { type: () => Int }) level: number,
    ) {
    return this.selfAssessmentTemplateService.findOneBylevel(tenantid,functionalarea,level);
  }

  @Mutation(returns => SelfAssessmentTemplateType)
  async createSelfAssessmentTemplate(
    @Args('selfAssessmentTemplateInput') SelfAssessmentTemplateInput: SelfAssessmentTemplateInput,
  ) {
    return this.selfAssessmentTemplateService.create(SelfAssessmentTemplateInput);
  }

  @Mutation(returns => SelfAssessmentTemplateType)
  async updateSelfAssessmentTemplate(
    @Args('sectionid', { type: () => Int }) sectionid: number,
    @Args('tenantid', { type: () => Int }) tenantid: number,
    @Args('SelfAssessmentTemplateInput') SelfAssessmentTemplateInput: SelfAssessmentTemplateInput,
  ) {
    return this.selfAssessmentTemplateService.update(tenantid,sectionid, SelfAssessmentTemplateInput);
  }
}
