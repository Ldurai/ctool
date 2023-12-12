import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeSelfAssessmentService } from './employee-self-assessment.service';
import { EmployeeSelfAssessmentController } from './employee-self-assessment.controller';
import { EmployeeSelfAssessmentEntity } from './employee-self-assessment.entity';
import {EmployeeSelfAssessmentResolver} from './employee-self-assessment.resolver'


@Module({
  imports: [
    TypeOrmModule.forFeature([EmployeeSelfAssessmentEntity]),
  ],
  providers: [EmployeeSelfAssessmentService,EmployeeSelfAssessmentResolver],
  controllers: [EmployeeSelfAssessmentController],
})
export class EmployeeSelfAssessmentModule {}
