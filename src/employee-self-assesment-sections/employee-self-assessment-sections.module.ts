import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeSelfAssessmentSectionsService } from './employee-self-assessment-sections.service';
import { EmployeeSelfAssessmentSectionsController } from './employee-self-assessment-sections.controller';
import { EmployeeSelfAssessmentSectionsEntity } from './employee-self-assessment-sections.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([EmployeeSelfAssessmentSectionsEntity]),
  ],
  providers: [EmployeeSelfAssessmentSectionsService],
  controllers: [EmployeeSelfAssessmentSectionsController],
})
export class EmployeeSelfAssessmentSectionsModule {}