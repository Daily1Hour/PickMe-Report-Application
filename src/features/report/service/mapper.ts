import { CompanyDetailDTO, IndustryDetailDTO } from "../api/dto";
import { CompanyReport, IndustryReport } from "@/entities/report/model";
import { Category } from "@/shared/model/Category";

export const map_to_companyReport = (dto: CompanyDetailDTO, id: string) =>
  new CompanyReport(
    id,
    dto.companyName,
    dto.companyFeatures,
    dto.companyIdealTalent,
    dto.companyNews,
  );

export const map_to_industryReport = (dto: IndustryDetailDTO, id: string) =>
  new IndustryReport(id, dto.industryType, dto.industryFeatures, dto.industryNews);

export const map_to_reportDTO = (category: Category, report: CompanyReport | IndustryReport) => ({
  category,
  companyDetail:
    category === Category.Company ? map_to_companyDetailDTO(report as CompanyReport) : null,
  industryDetail:
    category === Category.Industry ? map_to_industryDetailDTO(report as IndustryReport) : null,
});

export const map_to_companyDetailDTO = (report: CompanyReport): CompanyDetailDTO => ({
  companyName: report.name,
  companyFeatures: report.features,
  companyIdealTalent: report.ideal_talent,
  companyNews: report.news,
});

export const map_to_industryDetailDTO = (report: IndustryReport): IndustryDetailDTO => ({
  industryType: report.type,
  industryFeatures: report.features,
  industryNews: report.news,
});
