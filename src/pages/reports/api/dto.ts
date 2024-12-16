export interface ReportDTO {
  category: string;
  createdAt: Date;
  updatedAt: Date;
  companyDetails: CompanyDetailDTO[];
}

interface CompanyDetailDTO {
  companyName: string;
  companyFeatures: string;
  companyIdealTalent: string;
  companyNews: string;
}
