import client from "@/shared/api/client";
import { map_to_summary } from "./mapper";

export default async function getSummaries() {
  const result = await client.get("/sidebar");

  if (result.status === 200) {
    return result.data.map(map_to_summary) || [];
  }
  return [];
}
