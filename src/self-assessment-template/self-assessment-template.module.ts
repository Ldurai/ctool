import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SelfAssessmentTemplateService } from './self-assessment-template.service';
import { SelfAssessmentTemplateController } from './self-assessment-template.controller';
import { SelfAssessmentTemplateEntity } from './self-assessment-template.entity';
import { SelfAssessmentTemplateResolver } from './self-assessment-template.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([SelfAssessmentTemplateEntity]),
  ],
  providers: [SelfAssessmentTemplateService,SelfAssessmentTemplateResolver],
  controllers: [SelfAssessmentTemplateController],
})
export class SelfAssessmentTemplateModule {}
