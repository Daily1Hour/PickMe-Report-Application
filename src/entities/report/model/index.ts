import CompanyReport from "./CompanyReport";
import IndustryReport from "./IndustryReport";
export { company_report_keys } from "./CompanyReport";
export { industry_report_keys } from "./IndustryReport";

export { CompanyReport, IndustryReport };
export type ReportType = IndustryReport & CompanyReport;
