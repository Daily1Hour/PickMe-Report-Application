import { CompanySchemaType } from "./CompanySchema";
import { IndustrySchemaType } from "./IndustrySchema";

export type ReportSchemaType = CompanySchemaType | IndustrySchemaType;
export type { CompanySchemaType, IndustrySchemaType };

export { default as CompanySchema } from "./CompanySchema";
export { default as IndustrySchema } from "./IndustrySchema";
