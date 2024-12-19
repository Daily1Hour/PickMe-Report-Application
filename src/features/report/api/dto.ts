import { Category } from "@/entities/report/model/Category";

export interface ReportDTO<T = CompanyDetailDTO | IndustryDetailDTO> {
  category: Category;
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
