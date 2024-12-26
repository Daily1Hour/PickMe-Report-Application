import { CompanyDetailDTO, IndustryDetailDTO } from "./dto";
import { CompanyReport, IndustryReport } from "@/entities/report/model";
import { Category } from "@/shared/model/Category";

export const map_to_companyReport = (dto?: CompanyDetailDTO, id?: string) =>
  id && dto
    ? new CompanyReport(
        id,
        dto.companyName,
        dto.companyFeatures,
        dto.companyIdealTalent,
        dto.companyNews,
      )
    : new CompanyReport(null, "", "", "", "");

export const map_to_industryReport = (dto?: IndustryDetailDTO, id?: string) =>
  id && dto
    ? new IndustryReport(id, dto.industryType, dto.industryFeatures, dto.industryNews)
    : new IndustryReport(null, "", "", "");

export const map_to_reportDTO = (report: CompanyReport | IndustryReport) => ({
  category: report instanceof CompanyReport ? Category.Company : Category.Industry,
  companyDetails: report instanceof CompanyReport ? [map_to_companyDetailDTO(report)] : null,
  industryDetails: report instanceof IndustryReport ? [map_to_industryDetailDTO(report)] : null,
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
