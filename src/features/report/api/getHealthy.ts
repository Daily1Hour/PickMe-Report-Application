import { client } from "@/shared/api";
import { ReportDTO } from "./dto";

export default async function getHealthy(): Promise<null> {
  await client.get<ReportDTO>("");
  return null;
}
