import client from "@/shared/api/client";
import { RouteName } from "@/shared/model/RouteName";
import { RequestDTO } from "./dto";

export default async function setReport(route_name: RouteName, dto: RequestDTO, id?: string) {
  switch (route_name) {
    case RouteName.New:
      return await client.post("", dto);

    case RouteName.Detail:
      return await client.put("", dto, {
        params: {
          reportId: id,
        },
      });
  }
}
