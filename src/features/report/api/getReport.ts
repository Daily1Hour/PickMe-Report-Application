import { ReportDTO } from "./dto";
import { CompanyReport, IndustryReport } from "@/entities/report/model";
import { map_to_companyReport, map_to_industryReport } from "@/features/report/service/mapper";
import client from "@/shared/api/client";
import { Category } from "@/shared/model/Category";
import { RouteName } from "@/shared/model/RouteName";

export default async function getReport(route_name: RouteName, id?: string, category?: Category) {
  switch (route_name) {
    case RouteName.Detail:
      const result = await client.get<ReportDTO>("", {
        params: {
          reportId: id,
        },
      });

      if (result.status === 200) {
        const updated_category = result.data.category;

        switch (updated_category) {
          case Category.Company:
            return map_to_companyReport(result.data.companyDetail!, id!);

          case Category.Industry:
            return map_to_industryReport(result.data.industryDetail!, id!);
        }
      }
      throw new Error("Failed to fetch report");

    case RouteName.New:
      return category === Category.Company ? CompanyReport.empty() : IndustryReport.empty();

    default:
      throw new Error("Invalid route");
  }
}
