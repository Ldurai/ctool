import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { upperDirectiveTransformer } from './common/upper-case.directive';
import { DirectiveLocation, GraphQLDirective } from 'graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './employees/employees.module';
import { EmployeeSelfAssessmentModule } from './employee-self-assesment/employee-self-assessment.module';
import { EmployeeSelfAssessmentSectionsModule} from './employee-self-assesment-sections/employee-self-assessment-sections.module';
import { PerformanceCycleModule } from './performance-cyle/performance-cycle.module';
import { PerformanceTemplateModule } from './performance-template/performance-template.module';
import { SelfAssessmentTemplateModule } from './self-assessment-template/self-assessment-template.module';
// // Import your entities
import { EmployeeEntity } from './employees/employees.entity';
import { EmployeeSelfAssessmentEntity } from './employee-self-assesment/employee-self-assessment.entity';
import { EmployeeSelfAssessmentSectionsEntity } from './employee-self-assesment-sections/employee-self-assessment-sections.entity';
import { PerformanceCycleEntity } from './performance-cyle/performance-cycle.entity';
import { PerformanceTemplateEntity } from './performance-template/performance-template.entity';
import { SelfAssessmentTemplateEntity } from './self-assessment-template/self-assessment-template.entity';




@Module({
  imports: [
    EmployeeModule,
    EmployeeSelfAssessmentModule,
    EmployeeSelfAssessmentSectionsModule,
    PerformanceCycleModule,
    PerformanceTemplateModule,
    SelfAssessmentTemplateModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      introspection: true,
      transformSchema: schema => upperDirectiveTransformer(schema, 'upper'),
      installSubscriptionHandlers: true,
      formatError: (error) => {
        console.log('error message is \n',error.message);
        return {message: error.message};
      },
      
      buildSchemaOptions: {
        directives: [
          new GraphQLDirective({
            name: 'upper',
            locations: [DirectiveLocation.FIELD_DEFINITION],
          }),
        ],
      },
    }),
    TypeOrmModule.forRoot({ 
      type: 'postgres',
      url: 'postgres://lakshimi:3bcMX15PekuTB1o9qCG7CiIWxjtJ40nQ@dpg-cllqm09fb9qs7394381g-a.oregon-postgres.render.com/my_database_go6i',
      entities: [
        EmployeeEntity,
        EmployeeSelfAssessmentEntity,
        EmployeeSelfAssessmentSectionsEntity,
        PerformanceCycleEntity,
        PerformanceTemplateEntity,
        SelfAssessmentTemplateEntity,
      ],
      synchronize: false,
      ssl: {
        rejectUnauthorized: false, // Should be true in production
      },
      extra: {
        ssl: true,
      },
      logging: true,
      logger: 'advanced-console',
    }),
     
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}