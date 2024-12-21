import { CompanyDetailDTO, IndustryDetailDTO } from "./dto";
import { map_to_companyReport, map_to_industryReport } from "@/features/report/api/mapper";
import client from "@/shared/api/client";
import { Category } from "@/shared/model/Category";
import { RouteName } from "@/shared/model/RouteName";

export default async function getReport(category: Category, created_at: Date, name: RouteName) {
  if (name === RouteName.Detail) {
    const result = await client.get("", {
      params: {
        category,
        createdAt: created_at.toISOString(),
      },
    });

    if (result.status === 200) {
      const updated_category = result.data.category;

      switch (updated_category) {
        case Category.Company: {
          const fetch_report = result.data.companyDetails?.[0];
          return map_to_companyReport(fetch_report as CompanyDetailDTO);
        }
        case Category.Industry: {
          const fetch_report = result.data.industryDetails?.[0];
          return map_to_industryReport(fetch_report as IndustryDetailDTO);
        }
      }
    }
  }
  return category === Category.Company ? map_to_companyReport() : map_to_industryReport();
}
