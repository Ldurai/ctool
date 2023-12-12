import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SelfAssessmentTemplateService } from './self-assessment-template.service';
import { SelfAssessmentTemplateController } from './self-assessment-template.controller';
import { SelfAssessmentTemplateEntity } from './self-assessment-template.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([SelfAssessmentTemplateEntity]),
  ],
  providers: [SelfAssessmentTemplateService],
  controllers: [SelfAssessmentTemplateController],
})
export class SelfAssessmentTemplateModule {}
