import { ResponseDTO, RequestDTO } from "./dto";
import client from "@/shared/api/client";

export default async function setReport(setType: SetType, dto: RequestDTO, id?: string) {
  switch (setType) {
    case SetType.Make:
      return await client.post<ResponseDTO>("", dto);

    case SetType.Edit:
      return await client.put("", dto, {
        params: {
          reportId: id,
        },
      });
  }
}

export const enum SetType {
  Make,
  Edit,
}
