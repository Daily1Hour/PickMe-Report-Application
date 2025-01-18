import { plainToInstance } from "class-transformer";

import { CompanyDetailDTO, IndustryDetailDTO, ReportDTO } from "../api/dto";
import { IndustryReport, CompanyReport, ReportType } from "@/entities/report/model";
import { Category } from "@/shared/model/Category";
import { RouteName } from "@/shared/model/RouteName";

export default (
  route_name: RouteName,
  dto?: ReportDTO,
  id?: string,
  category?: Category,
): ReportType => {
  switch (route_name) {
    case RouteName.Detail:
      const updated_category = dto?.category;

      switch (updated_category) {
        case Category.Company:
          return map_to_companyReport(dto!.companyDetail!, id!);

        case Category.Industry:
          return map_to_industryReport(dto!.industryDetail!, id!);

        default:
          return CompanyReport.empty();
      }

    case RouteName.New:
      return category === Category.Industry ? IndustryReport.empty() : CompanyReport.empty();
  }
};

export const map_to_companyReport = (dto: CompanyDetailDTO, id: string) =>
  plainToInstance(CompanyReport, {
    id,
    name: dto.companyName,
    features: dto.companyFeatures,
    ideal_talent: dto.companyIdealTalent,
    news: dto.companyNews,
  });

export const map_to_industryReport = (dto: IndustryDetailDTO, id: string) =>
  plainToInstance(IndustryReport, {
    id,
    type: dto.industryType,
    features: dto.industryFeatures,
    news: dto.industryNews,
  });
