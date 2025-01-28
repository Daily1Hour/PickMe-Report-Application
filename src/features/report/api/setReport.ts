import { RouteName } from "@/shared/model";
import client from "@/shared/api/client";
import { ResponseDTO, RequestDTO } from "./dto";

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

const enum SetType {
  Make,
  Edit,
}

export const typeMap = {
  [RouteName.New]: SetType.Make,
  [RouteName.Detail]: SetType.Edit,
};
