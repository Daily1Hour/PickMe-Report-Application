import { SummaryDTO } from "./dto";
import { Summary } from "@/entities/summary/model";

export const map_to_summary = (dto: SummaryDTO): Summary => {
  return new Summary(
    dto.reportId,
    dto.category,
    new Date(dto.createdAt),
    new Date(dto.updatedAt),
    dto.companyName || dto.industryType,
  );
};
