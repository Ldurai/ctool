import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeSelfAssessmentSectionsService } from './employee-self-assessment-sections.service';
//import { EmployeeSelfAssessmentSectionsController } from './employee-self-assessment-sections.controller';
import { EmployeeSelfAssessmentSectionsEntity } from './employee-self-assessment-sections.entity';
import { EmployeeSelfAssessmentSectionsResolver } from './employee-self-assessment-sections.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([EmployeeSelfAssessmentSectionsEntity]),
  ],
  providers: [EmployeeSelfAssessmentSectionsService,EmployeeSelfAssessmentSectionsResolver],
  controllers: [],
})
export class EmployeeSelfAssessmentSectionsModule {}
