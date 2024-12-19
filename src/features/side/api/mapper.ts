import { CompanyDetailDTO, IndustryDetailDTO, ReportDTO } from "./dto";
import { Summary } from "@/entities/report/model";
import { Category } from "@/entities/report/model/Category";

export const map_to_summary = (report: ReportDTO, index: number): Summary => {
  switch (report.category) {
    case Category.Company:
      return {
        id: index.toString(),
        category: report.category,
        name: (report.companyDetails?.[0] as CompanyDetailDTO).companyName,
        created_at: new Date(report.createdAt),
      };
    case Category.Industry:
      return {
        id: index.toString(),
        category: report.category,
        name: (report.industryDetails?.[0] as IndustryDetailDTO).industryType,
        created_at: new Date(report.createdAt),
      };
  }
};
