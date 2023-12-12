import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeService } from './employees.service';
import { EmployeeController } from './employees.controller';
import { EmployeeEntity } from './employees.entity';
import { EmployeeResolver } from './employee.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([EmployeeEntity]), // Register EmployeeEntity with TypeORM
  ],
  providers: [EmployeeService,EmployeeResolver], // Register EmployeeService
  controllers: [EmployeeController], // Register EmployeeController
})
export class EmployeeModule {}
