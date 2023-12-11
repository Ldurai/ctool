export class EmployeeSelfAssessmentModel {
    tenant_id: number;
    assessmentid: number;
    employeeid: number;
    assessmentdate: Date;
    performancecycleid?: number;
    strengths?: string;
    weaknesses?: string;
    goals?: string;
    managerfeedbackid?: number;
    additionalcomments?: string;
}
