import { ReportDTO } from "./dto";
import client from "@/shared/api/client";

export default async function getReport(id?: string): Promise<ReportDTO | null> {
  if (id) {
    const result = await client.get<ReportDTO>("", {
      params: {
        reportId: id,
      },
    });

    if (result.status === 200) {
      return result.data;
    }
  }

  return null;
}
