import { client, ServerError } from "@/shared/api";
import { SummaryDTO } from "./dto";

export default async function getSummaries() {
  // 사이드바에 표시할 요약 정보 GET 요청
  const result = await client.get<SummaryDTO[]>("/sidebar");

  if (result.status === 200) {
    // DTO를 엔터티 모델로 변환
    return result.data;
  }
  throw new ServerError("Failed to get report", result.status);
}
