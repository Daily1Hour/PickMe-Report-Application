import { client, ServerError } from "@/shared/api";

export default async function deleteReport(id: string) {
  const result = await client.delete("", {
    params: {
      reportId: id,
    },
  });

  if (result.status === 200) {
    console.log("Deleted");
    return;
  }
  throw new ServerError("Failed to get report", result.status);
}
