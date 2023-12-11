import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeService } from './employees.service';
import { EmployeeController } from './employees.controller';
import { EmployeeEntity } from './employees.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([EmployeeEntity]), // Register EmployeeEntity with TypeORM
  ],
  providers: [EmployeeService], // Register EmployeeService
  controllers: [EmployeeController], // Register EmployeeController
})
export class EmployeeModule {}
