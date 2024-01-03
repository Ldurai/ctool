// import { Controller, Get, Post, Put, Delete, Body, Param, Res, HttpStatus } from '@nestjs/common';
// import { EmployeeSelfAssessmentSectionsService } from './employee-self-assessment-sections.service';
// import { EmployeeSelfAssessmentSectionsModel } from './models/employee-self-assessment-sections.model';
// import { Response } from 'express';

// @Controller('employee-self-assessment-sections')
// export class EmployeeSelfAssessmentSectionsController {
//     constructor(private readonly service: EmployeeSelfAssessmentSectionsService) {}

//     // Get all sections
//     @Get()
//     async getAll(@Res() res: Response) {
//         const sections = await this.service.findAll();
//         return res.status(HttpStatus.OK).json(sections);
//     }

//     // Get a single section by composite key
//     @Get(':tenantId/:assessmentId/:sectionId')
//     async getById(@Param('tenantId') tenantId: number, @Param('assessmentId') assessmentId: number, @Param('sectionId') sectionId: number, @Res() res: Response) {
//         const section = await this.service.findOne(tenantId, assessmentId, sectionId);
//         if (!section) return res.status(HttpStatus.NOT_FOUND).json({ message: 'Section not found' });
//         return res.status(HttpStatus.OK).json(section);
//     }

//     // Create a new section
//     @Post()
//     async create(@Body() sectionData: EmployeeSelfAssessmentSectionsModel, @Res() res: Response) {
//         const newSection = await this.service.create(sectionData);
//         return res.status(HttpStatus.CREATED).json(newSection);
//     }
//     // Create a new assessment
    

//     // Update an existing section
//     @Put(':tenantId/:assessmentId/:sectionId')
//     async update(@Param('tenantId') tenantId: number, @Param('assessmentId') assessmentId: number, @Param('sectionId') sectionId: number, @Body() sectionData: EmployeeSelfAssessmentSectionsModel, @Res() res: Response) {
//         console.log("entering update for sections");
//         const updatedSection = await this.service.update(tenantId, assessmentId, sectionId, sectionData);
//         return res.status(HttpStatus.OK).json(updatedSection);
//     }
    
 
//     // Delete a section
//     @Delete(':tenantId/:assessmentId/:sectionId')
//     async delete(@Param('tenantId') tenantId: number, @Param('assessmentId') assessmentId: number, @Param('sectionId') sectionId: number, @Res() res: Response) {
//         await this.service.delete(tenantId, assessmentId, sectionId);
//         return res.status(HttpStatus.OK).json({ message: 'Section deleted successfully' });
//     }
// }
