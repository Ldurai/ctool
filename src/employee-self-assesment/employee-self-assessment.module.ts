import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeSelfAssessmentService } from './employee-self-assessment.service';
import { EmployeeSelfAssessmentController } from './employee-self-assessment.controller';
import { EmployeeSelfAssessmentEntity } from './employee-self-assessment.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([EmployeeSelfAssessmentEntity]),
  ],
  providers: [EmployeeSelfAssessmentService],
  controllers: [EmployeeSelfAssessmentController],
})
export class EmployeeSelfAssessmentModule {}
