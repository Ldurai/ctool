import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmployeeEntity } from './employees.entity';

@Injectable()
export class EmployeeService {
    constructor(
        @InjectRepository(EmployeeEntity)
        private employeeRepository: Repository<EmployeeEntity>,
    ) {}

    // Fetch all employees
    async findAll(): Promise<EmployeeEntity[]> {
        return await this.employeeRepository.find();
    }

    // Fetch a single employee by ID
    async findOne(employeeId: number): Promise<EmployeeEntity | undefined> {
        return await this.employeeRepository.findOne({ where: { employee_id: employeeId } });
    }

    // Additional methods for create, update, delete, etc., can be added here
}

