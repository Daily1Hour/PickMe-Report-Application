import { Category } from "@/shared/model";
import { CompanyReport, IndustryReport } from "@/entities/report/model";
import { CompanyDetailDTO, IndustryDetailDTO } from "../api/dto";

export default (category: Category, report: CompanyReport | IndustryReport) => {
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
