import { z } from "zod";

const companySchema = z.object({
  id: z.string().nullable(),
  // 추가 필드 유효성 정의
  name: z.string().min(1, { message: "This is required" }),
  features: z.string().optional(),
  ideal_talent: z.string().optional(),
  news: z.string().optional(),
});

export default companySchema;

export type CompanySchemaType = z.infer<typeof companySchema>;
