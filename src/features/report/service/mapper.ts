import { plainToInstance } from "class-transformer";

import { CompanyDetailDTO, IndustryDetailDTO } from "../api/dto";
import { CompanyReport, IndustryReport } from "@/entities/report/model";

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
