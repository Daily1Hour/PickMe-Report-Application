import CompanyReport from "./CompanyReport";
import IndustryReport from "./IndustryReport";
export { company_report_fields } from "./CompanyReport";
export { industry_report_fields } from "./IndustryReport";

export { CompanyReport, IndustryReport };
export type ReportType = IndustryReport | CompanyReport;
export type ReportKeys = keyof Omit<IndustryReport, "id"> | keyof Omit<CompanyReport, "id">;
