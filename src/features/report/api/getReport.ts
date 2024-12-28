import { ReportDTO } from "./dto";
import { map_to_companyReport, map_to_industryReport } from "@/features/report/api/mapper";
import client from "@/shared/api/client";
import { Category } from "@/shared/model/Category";
import { RouteName } from "@/shared/model/RouteName";

export default async function getReport(route_name: RouteName, id?: string, category?: Category) {
  if (route_name === RouteName.Detail) {
    const result = await client.get<ReportDTO>("", {
      params: {
        reportId: id,
      },
    });

    if (result.status === 200) {
      const updated_category = result.data.category;

      switch (updated_category) {
        case Category.Company: {
          const fetch_report = result.data.companyDetail;
          return map_to_companyReport(fetch_report, id);
        }
        case Category.Industry: {
          const fetch_report = result.data.industryDetail;
          return map_to_industryReport(fetch_report, id);
        }
      }
    }
  }
  return category === Category.Company ? map_to_companyReport() : map_to_industryReport();
}
