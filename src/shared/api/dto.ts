export interface ReportDTO {
  category: string;
  createdAt: Date;
  updatedAt: Date;
  companyDetails: (CompanyDetailDTO | IndustryDetailDTO)[];
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
