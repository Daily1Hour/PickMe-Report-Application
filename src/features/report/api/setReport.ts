import { AxiosResponse } from "axios";

import { RouteName } from "@/shared/model";
import { client, ServerError } from "@/shared/api";
import { ResponseDTO, RequestDTO, ReportDTO } from "./dto";

export default async function setReport(setType: SetType, dto: RequestDTO, id?: string) {
  let result: AxiosResponse<ResponseDTO | ReportDTO, any>;

  switch (setType) {
    case SetType.Make:
      result = await client.post<ResponseDTO>("", dto);
      break;
    case SetType.Edit:
      result = await client.put<ReportDTO>("", dto, {
        params: {
          reportId: id,
        },
      });
      result.data.reportId = id!;
      break;
  }

  if (result.status === 200) {
    return result.data;
  } else {
    throw new ServerError("Failed to set report", result.status);
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
