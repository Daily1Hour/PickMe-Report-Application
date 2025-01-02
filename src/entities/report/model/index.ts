import CompanyReport, { company_report_fields } from "./CompanyReport";
import IndustryReport, { industry_report_fields } from "./IndustryReport";
export { company_report_fields } from "./CompanyReport";
export { industry_report_fields } from "./IndustryReport";

export { CompanyReport, IndustryReport };
export const report_fields = [...company_report_fields, ...industry_report_fields] as const;
export type ReportType = IndustryReport | CompanyReport;
export type ReportKeys = keyof Omit<IndustryReport, "id"> | keyof Omit<CompanyReport, "id">;
