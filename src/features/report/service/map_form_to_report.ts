import { CompanyReport, IndustryReport, ReportType } from "@/entities/report/model";
import { CompanySchemaType, IndustrySchemaType, ReportSchemaType } from "../model";

export default (form: ReportSchemaType): ReportType => {
  let report: CompanyReport | IndustryReport;

  if (form.hasOwnProperty("name")) {
    const { id, name, features, ideal_talent, news } = form as CompanySchemaType;
    report = new CompanyReport(id, name, features, ideal_talent, news);
  } else {
    const { id, type, features, news } = form as IndustrySchemaType;
    report = new IndustryReport(id, type, features, news);
  }
  return report;
};
