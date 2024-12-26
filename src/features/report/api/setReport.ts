import { ReportType } from "@/entities/report/model";
import { map_to_reportDTO } from "@/features/report/api/mapper";
import client from "@/shared/api/client";
import { RouteName } from "@/shared/model/RouteName";

export default async function setReport(id: string, report: ReportType, name: RouteName) {
  const dto = map_to_reportDTO(report);

  if (name === RouteName.New) {
    await client.post("", dto);
  } else {
    await client.put("", dto, {
      params: {
        reportId: id,
      },
    });
  }
}
