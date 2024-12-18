import { CompanyReport, IndustryReport } from "@/entities/report/model";

export interface ReportDTO<T = CompanyDetailDTO | IndustryDetailDTO> {
  category: string;
  createdAt: Date;
  updatedAt: Date;
  companyDetails?: T[];
  industryDetails?: T[];
}

export interface CompanyDetailDTO {
  companyName: string;
  companyFeatures: string;
  companyIdealTalent: string;
  companyNews: string;
}

export interface IndustryDetailDTO {
  industryType: string;
  industryFeatures: string;
  industryNews: string;
}

export const map_to_companyReport = (dto?: CompanyDetailDTO) =>
  dto
    ? new CompanyReport(
        dto.companyName,
        dto.companyFeatures,
        dto.companyIdealTalent,
        dto.companyNews,
      )
    : new CompanyReport("", "", "", "");

export const map_to_industryReport = (dto?: IndustryDetailDTO) =>
  dto
    ? new IndustryReport(dto.industryType, dto.industryFeatures, dto.industryNews)
    : new IndustryReport("", "", "");

export const map_to_reportDTO = (report: CompanyReport | IndustryReport) => ({
  category: report instanceof CompanyReport ? "company" : "industry",
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
