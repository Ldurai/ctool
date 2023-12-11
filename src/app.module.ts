import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { upperDirectiveTransformer } from './common/upper-case.directive';
import { JobsModule } from './job/jobs.module'; // Import the JobsModule
import { DirectiveLocation, GraphQLDirective } from 'graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './employees/employees.module';
import { EmployeeSelfAssessmentModule } from './employee-self-assesment/employee-self-assessment.module';
import { EmployeeSelfAssessmentSectionsModule} from './employee-self-assesment-sections/employee-self-assessment-sections.module';
import { PerformanceCycleModule } from './performance-cyle/performance-cycle.module';


@Module({
  imports: [
    JobsModule,
    EmployeeModule,
    EmployeeSelfAssessmentModule,
    EmployeeSelfAssessmentSectionsModule,
    PerformanceCycleModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      introspection: true,
      transformSchema: schema => upperDirectiveTransformer(schema, 'upper'),
      installSubscriptionHandlers: true,
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
      // host: 'postgres://dpg-c11qm09fb9qs7394381g-a.oregon-postgres.render.com',
      // port: 5432,
      // username: 'lakshimi',
      // password: '3bcMX15PekuTB1o9qCG7CiIWxjtJ40nQ',
      // database: 'my_database_go6i',
      autoLoadEntities: true,
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