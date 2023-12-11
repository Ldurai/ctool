import { Controller, Get, Param, HttpStatus, HttpException, Res, NotFoundException } from '@nestjs/common';
import { EmployeeService } from './employees.service';
import { EmployeeEntity } from './employees.entity';
import { Response } from 'express';

@Controller('employees')
export class EmployeeController {
    constructor(private employeeService: EmployeeService) {}

    // Get all employees
    @Get()
    async getAllEmployees(@Res() res: Response): Promise<Response> {
        const employees = await this.employeeService.findAll();
        return res.status(HttpStatus.OK).json(employees);
    }

    // Get a single employee by ID
    @Get('/getemp/:id')
    async getEmployeeById(@Param('id') id: number, @Res() res: Response): Promise<Response> {
        const employee = await this.employeeService.findOne(id);
        if (!employee) {
            throw new NotFoundException(`Employee with ID ${id} not found`);
        }
        return res.status(HttpStatus.OK).json(employee);
    }

    // Additional methods for create, update, delete, etc., can be added here
}
