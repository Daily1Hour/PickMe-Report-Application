import { CompanyReport, IndustryReport, ReportType } from "@/entities/report/model";
import { CompanySchemaType, IndustrySchemaType, ReportSchemaType } from "../model";

export default function map_report_to_form(report: ReportType): ReportSchemaType {
  if (report instanceof CompanyReport) {
    return report as CompanySchemaType;
  }

  if (report instanceof IndustryReport) {
    return report as IndustrySchemaType;
  }

  throw new Error("Invalid report type");
}
