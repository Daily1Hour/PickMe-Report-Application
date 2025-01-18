import { CompanyDetailDTO, IndustryDetailDTO } from "../api/dto";
import { CompanyReport, IndustryReport } from "@/entities/report/model";
import { Category } from "@/shared/model";

export default (category: Category, report: CompanyReport | IndustryReport) => {
  if (report.hasOwnProperty("name")) {
    const { id, name, features, ideal_talent, news } = report as CompanyReport;
    report = new CompanyReport(id, name, features, ideal_talent, news);
  } else {
    const { id, type, features, news } = report as IndustryReport;
    report = new IndustryReport(id, type, features, news);
  }

  return {
    category,
    companyDetail: report instanceof CompanyReport ? map_to_companyDetailDTO(report) : undefined,
    industryDetail: report instanceof IndustryReport ? map_to_industryDetailDTO(report) : undefined,
  };
};

const map_to_companyDetailDTO = (report: CompanyReport): CompanyDetailDTO => ({
  companyName: report.name,
  companyFeatures: report.features,
  companyIdealTalent: report.ideal_talent,
  companyNews: report.news,
});

const map_to_industryDetailDTO = (report: IndustryReport): IndustryDetailDTO => ({
  industryType: report.type,
  industryFeatures: report.features,
  industryNews: report.news,
});
