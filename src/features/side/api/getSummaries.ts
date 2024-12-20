import client from "@/shared/api/client";
import { map_to_summary } from "./mapper";
import { Category } from "@/shared/model/Category";

export default async function getSummaries(category: Category) {
  const result = await client.get("/list", {
    params: {
      category,
    },
  });

  if (result.status === 200) {
    return result.data.map(map_to_summary) || [];
  }
  return [];
}
