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
 
    @Query(() => [SelfAssessmentTemplateType]) // Assuming SelfAssessmentTemplateType is nullable
    async selfAssessmentTemplateByFunctionalarea(
    @Args('tenantid', { type: () => Int }) tenantid: number,
    @Args('functionalarea', { type: () => String }) functionalarea: string
    ) : Promise<SelfAssessmentTemplateType[]>{
        console.log('resolve template calling service');
        const templates = await this.selfAssessmentTemplateService.findByFunctionalArea(tenantid, functionalarea);
        console.log('resolve template ', templates);

        if (!templates || templates.length === 0) {
          // Handle the case where no templates are found
          throw new Error(`No templates found for Tenant ID ${tenantid} and Functional Area ${functionalarea}.`);
        }
        return templates; // Return the found templates
  }

  @Query(()=> [SelfAssessmentTemplateType])
  async selfAssessmentTemplateBylevel(@Args('tenantid', { type: () => Int }) tenantid: number,
    @Args('functionalarea', { type: () => String }) functionalarea : string,
    @Args('level', { type: () => Int }) level: number)
    :  Promise<SelfAssessmentTemplateType[]>{
    return this.selfAssessmentTemplateService.findAllByLevel(tenantid,functionalarea,level);
  }

  @Mutation(returns => SelfAssessmentTemplateType)
  async createSelfAssessmentTemplate(
    @Args('selfAssessmentTemplateInput') SelfAssessmentTemplateInput: SelfAssessmentTemplateInput,
  ) {
    return this.selfAssessmentTemplateService.create(SelfAssessmentTemplateInput);
  }

  @Mutation(returns => SelfAssessmentTemplateType)
  async updateSelfAssessmentTemplate(
    @Args('tenantid', { type: () => Int }) tenantid: number,
    @Args('functionalarea', { type: () => String }) functionalarea: string,
    @Args('sectionid', { type: () => Int }) sectionid: number,
    @Args('SelfAssessmentTemplateInput') SelfAssessmentTemplateInput: SelfAssessmentTemplateInput,
  ) {
    return this.selfAssessmentTemplateService.update(tenantid,functionalarea,sectionid ,SelfAssessmentTemplateInput);
  }
  @Mutation(returns => Boolean)
  async deleteSelfAssessmentTemplate(@Args('tenantId') tenantId: number,
    @Args ('functionalarea') functionarea:string,
    @Args ('sectionId') sectionId:number
    ): Promise<boolean> {
     return this.selfAssessmentTemplateService.delete(tenantId,functionarea,sectionId);
  }
}
