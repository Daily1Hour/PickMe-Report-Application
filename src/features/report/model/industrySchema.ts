import { z } from "zod";

const industrySchema = z.object({
  id: z.string().nullable(),
  // 추가 필드 유효성 정의
  type: z.string().min(1, { message: "This is required" }),
  features: z.string().optional(),
  news: z.string().optional(),
});

export default industrySchema;

export type IndustrySchemaType = z.infer<typeof industrySchema>;
