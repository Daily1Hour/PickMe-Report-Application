import { ReportType } from "@/entities/report/model";
import { map_to_reportDTO } from "@/features/report/api/mapper";
import client from "@/shared/api/client";
import { Category } from "@/shared/model/Category";
import { RouteName } from "@/shared/model/RouteName";

export default async function setReport(
  route_name: RouteName,
  category: Category,
  id: string,
  report: ReportType,
) {
  const dto = map_to_reportDTO(category, report);

  if (route_name === RouteName.New) {
    await client.post("", dto);
  } else {
    await client.put("", dto, {
      params: {
        reportId: id,
      },
    });
  }
}
