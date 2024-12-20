import client from "@/shared/api/client";
import { Category } from "@/shared/model/Category";

export default async function deleteReport(category: Category, created_at: Date) {
  const data = await client.delete("", {
    params: {
      category,
      createdAt: created_at.toISOString(),
    },
  });

  if (data.status === 200) {
    console.log("Deleted");
  }
}
