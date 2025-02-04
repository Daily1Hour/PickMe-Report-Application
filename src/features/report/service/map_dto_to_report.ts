import { plainToInstance } from "class-transformer";

import { Category, RouteName } from "@/shared/model";
import { IndustryReport, CompanyReport, ReportType } from "@/entities/report/model";
import { CompanyDetailDTO, IndustryDetailDTO, ReportDTO } from "../api/dto";

export default (
  route_name: RouteName,
  dto: ReportDTO | null,
  id?: string,
  category?: Category,
): ReportType | null => {
  switch (route_name) {
    case RouteName.Detail:
      switch (dto!.category) {
        case Category.Company:
          return map_to_companyReport(dto!.companyDetail!, id!);

        case Category.Industry:
          return map_to_industryReport(dto!.industryDetail!, id!);
      }

    case RouteName.New:
      return category === Category.Industry ? IndustryReport.empty() : CompanyReport.empty();
  }
};

const map_to_companyReport = (dto: CompanyDetailDTO, id: string) =>
  plainToInstance(CompanyReport, {
    id,
    name: dto.companyName,
    features: dto.companyFeatures,
    ideal_talent: dto.companyIdealTalent,
    news: dto.companyNews,
  });

const map_to_industryReport = (dto: IndustryDetailDTO, id: string) =>
  plainToInstance(IndustryReport, {
    id,
    type: dto.industryType,
    features: dto.industryFeatures,
    news: dto.industryNews,
  });
