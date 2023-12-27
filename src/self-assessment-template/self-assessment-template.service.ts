import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SelfAssessmentTemplateEntity } from './self-assessment-template.entity';

@Injectable()
export class SelfAssessmentTemplateService {
    constructor(
        @InjectRepository(SelfAssessmentTemplateEntity)
        private repository: Repository<SelfAssessmentTemplateEntity>,
    ) {}
    
    async findAllOrderedByFunctionalAreaAndSectionId(): Promise<SelfAssessmentTemplateEntity[]> {
        console.log('entering service');
        const selfAtemp = await this.repository.createQueryBuilder('selfAssessmentTemplate')
            .orderBy('selfAssessmentTemplate.functionalarea', 'ASC')
            .addOrderBy('selfAssessmentTemplate.sectionid', 'ASC')
            .addOrderBy('selfAssessmentTemplate.level','ASC')
            .getMany();
        console.log('data from db', selfAtemp);
        return selfAtemp;
    }
    
    // Function to find one specific template based on tenantId and sectionId
    async findAllByLevel(tenantId: number, functionalarea: string, level: number): Promise<SelfAssessmentTemplateEntity[]> {
        console.log('Finding one specific template with ordering');
        const template = await this.repository.createQueryBuilder('selfAssessmentTemplate')
            .where('selfAssessmentTemplate.tenantid = :tenantId', { tenantId })
            .andWhere('selfAssessmentTemplate.functionalarea = :functionalarea', { functionalarea })
            .andWhere('selfAssessmentTemplate.level = :level', { level })
            .orderBy('selfAssessmentTemplate.sectionid', 'ASC') // Modify this line to order by the column you're interested in
            // .addOrderBy('selfAssessmentTemplate.anotherColumn', 'ASC') // You can chain more order by clauses if needed
            .getMany(); // Retrieves only one result
    
        if (!template) {
            throw new NotFoundException(`Template with Tenant ID ${tenantId}, Functional Area ${functionalarea}, and Level ${level} not found`);
        }
        return template;
    }
    


    async findAll(): Promise<SelfAssessmentTemplateEntity[]> {
        console.log('entering service');
        //const selfAtemp = await this.repository.find();
        const selfAtemp = this.findAllOrderedByFunctionalAreaAndSectionId();
        console.log('data from db', selfAtemp);
        return await this.findAllOrderedByFunctionalAreaAndSectionId();
    }

    async findByFunctionalArea(tenantId: number, functionalarea: string): Promise<SelfAssessmentTemplateEntity[]> {
        const templates = await this.repository.find({
            where: { tenantid: tenantId, functionalarea: functionalarea }
        });
        console.log('templates', templates);
        if (!templates || templates.length === 0) {
            throw new NotFoundException(`Templates with Tenant ID ${tenantId}, function area ${functionalarea} not found`);
        }
        return templates;
    }
    
    async findOneByFunctionalareaSectionId(tenantId: number, functionalarea: string, sectionId: number): Promise<SelfAssessmentTemplateEntity> {
        const template = await this.repository.findOne({ where: { tenantid: tenantId, functionalarea: functionalarea, sectionid: sectionId } });
        if (!template) {
            throw new NotFoundException(`Template with Tenant ID ${tenantId}, function area ${functionalarea} and Section ID ${functionalarea} not found`);
        }
        return template;
    }

    async findOneBylevel(tenantId: number,  functionalarea : string, level: number): Promise<SelfAssessmentTemplateEntity> {
        const template = await this.repository.findOne({ where: { tenantid: tenantId, functionalarea : functionalarea,level: level } });
        if (!template) {
            throw new NotFoundException(`Template with Tenant ID ${tenantId} and Section ID ${level} and not found`);
        }
        return template;
    }

    async create(templateData: SelfAssessmentTemplateEntity): Promise<SelfAssessmentTemplateEntity> {
        return await this.repository.save(templateData);
    }

    async update(tenantId: number, functionalarea: string, sectionId: number,templateData: SelfAssessmentTemplateEntity): Promise<SelfAssessmentTemplateEntity> {
        const template = await this.findOneByFunctionalareaSectionId(tenantId, functionalarea, sectionId);
        Object.assign(template, templateData);
        return await this.repository.save(template);
    }

    async delete(tenantId: number, functionalarea: string, sectionId: number): Promise<boolean> {
        const result = await this.repository.delete({ tenantid: tenantId, functionalarea: functionalarea, sectionid: sectionId });
        if (result.affected === 0) {
            throw new NotFoundException(`Template with Tenant ID ${tenantId}, and Section ID ${sectionId} not found`);
        }
        else
            return true;
    }
}
