import { Category } from "@/shared/model";

export interface ReportDTO {
  reportId: string;
  category: Category;
  createdAt: Date;
  updatedAt: Date;
  companyDetail?: CompanyDetailDTO;
  industryDetail?: IndustryDetailDTO;
}

export interface RequestDTO {
  category: Category;
  companyDetail?: CompanyDetailDTO;
  industryDetail?: IndustryDetailDTO;
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

export interface ResponseDTO {
  reportId: string;
}