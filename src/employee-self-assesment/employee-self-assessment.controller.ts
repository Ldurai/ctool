// import { Controller, Get, Post, Put, Delete, Body, Param, Res, HttpStatus } from '@nestjs/common';
// import { EmployeeSelfAssessmentService } from './employee-self-assessment.service';
// import { EmployeeSelfAssessmentModel } from './models/employee-self-assessment.model';
// import { Response } from 'express';

// @Controller('employee-self-assessments')
// export class EmployeeSelfAssessmentController {
//     constructor(private readonly service: EmployeeSelfAssessmentService) {}

//     // Get all assessments
//     @Get()
//     async getAll(@Res() res: Response) {
//         const assessments = await this.service.findAll();
//         return res.status(HttpStatus.OK).json(assessments);
//     }

//     // Get assessment by ID
//     @Get('assesment/:assessmentId/:tenantId')
//     async getById(@Param('assessmentId') assessmentId: number, @Param('tenantId') tenantId: number, @Res() res: Response) {
//         const assessment = await this.service.findOne(assessmentId, tenantId);
//         if (!assessment) return res.status(HttpStatus.NOT_FOUND).json({ message: 'Assessment not found' });
//         return res.status(HttpStatus.OK).json(assessment);
//     }

//     // Get assessments by employee ID
//     @Get('employee/:employeeId')
//     async getByEmployeeId(@Param('employeeId') employeeId: number, @Res() res: Response) {
//         console.log('enterinng assesement controlelr');
//         const assessments = await this.service.findByEmployeeId(employeeId);
//         return res.status(HttpStatus.OK).json(assessments);
//     }

//     // Create a new assessment
//     @Post()
//     async create(@Body() assessmentData: EmployeeSelfAssessmentModel, @Res() res: Response) {
//         const newAssessment = await this.service.create(assessmentData);
//         return res.status(HttpStatus.CREATED).json(newAssessment);
//     }

//     // Update an assessment
//     @Put(':assessmentId/:tenantId')
//     async update(@Param('assessmentId') assessmentId: number, @Param('tenantId') tenantId: number, @Body() assessmentData: EmployeeSelfAssessmentModel, @Res() res: Response) {
//         const updatedAssessment = await this.service.update(assessmentId, tenantId, assessmentData);
//         return res.status(HttpStatus.OK).json(updatedAssessment);
//     }

//     // Delete an assessment
//     @Delete(':assessmentId/:tenantId')
//     async delete(@Param('assessmentId') assessmentId: number, @Param('tenantId') tenantId: number, @Res() res: Response) {
//         await this.service.delete(assessmentId, tenantId);
//         return res.status(HttpStatus.OK).json({ message: 'Assessment deleted successfully' });
//     }
// }
