import client from "@/shared/api/client";
import { ReportDTO } from "./dto";

export default async function getReport(id?: string): Promise<ReportDTO> {
  const result = await client.get<ReportDTO>("", {
    params: {
      reportId: id,
    },
  });

  if (result.status === 200) {
    return result.data;
  }
  throw new Error("Failed to fetch report");
}
