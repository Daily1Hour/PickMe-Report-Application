import { CompanyReport, IndustryReport } from "@/entities/report/model";

export interface ReportDTO<T = CompanyDetailDTO | IndustryDetailDTO> {
  category: string;
  createdAt: Date;
  updatedAt: Date;
  companyDetails: T[];
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
