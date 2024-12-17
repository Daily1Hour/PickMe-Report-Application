import CompanyReport from "./CompanyReport";
import IndustryReport from "./IndustryReport";

export { default as Summary } from "./Summary";
export { CompanyReport, IndustryReport };
export type ReportType = IndustryReport | CompanyReport;
