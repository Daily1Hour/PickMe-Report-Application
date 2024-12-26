import client from "@/shared/api/client";

export default async function deleteReport(id: string) {
  const data = await client.delete("", {
    params: {
      reportId: id,
    },
  });

  if (data.status === 200) {
    console.log("Deleted");
  }
}
