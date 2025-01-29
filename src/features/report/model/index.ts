import { CompanySchemaType } from "./companySchema";
import { IndustrySchemaType } from "./industrySchema";

export type ReportSchemaType = CompanySchemaType | IndustrySchemaType;
export type { CompanySchemaType, IndustrySchemaType };

export { default as companySchema } from "./companySchema";
export { default as industrySchema } from "./industrySchema";
