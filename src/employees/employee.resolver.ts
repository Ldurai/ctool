import { Resolver, Query, Args, Mutation, Int } from '@nestjs/graphql';
import { EmployeeService } from './employees.service';
import { EmployeeType } from './dto/employee.type';
import { EmployeeInput } from './dto/employee.input';

@Resolver(() => EmployeeType)
export class EmployeeResolver {
    constructor(private readonly employeeService: EmployeeService) {}

    @Query(() => [EmployeeType])
    async employees() {
        return this.employeeService.findAll();
    }

    @Query(() => EmployeeType)
    async employee(@Args('id', { type: () => Int }) id: number) {
        return this.employeeService.findOne(id);
    }

    // Mutation example: add createEmployee, updateEmployee, deleteEmployee, etc.
}
