import { ReportType } from "@/entities/report/model";
import { map_to_reportDTO } from "@/features/report/api/mapper";
import client from "@/shared/api/client";
import { Category } from "@/shared/model/Category";

export default async function setReport(
  category: Category,
  created_at: Date,
  name: string,
  report: ReportType,
) {
  const dto = map_to_reportDTO(report);

  if (name === "new") {
    await client.post("", dto);
  } else {
    await client.put("", dto, {
      params: {
        category,
        createdAt: name === "new" ? null : created_at.toISOString(),
      },
    });
  }
}
