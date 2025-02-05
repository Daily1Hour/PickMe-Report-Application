import { z, ZodTypeAny } from "zod";

import { IndustryReport } from "@/entities/report/model";

const IndustrySchema = z.object({
  ...IndustryReport.keys.reduce((acc, key) => {
    acc[key] = z.string().optional();
    return acc;
  }, {} as Record<keyof IndustryReport, ZodTypeAny>),

  type: z.string().min(1, { message: "This is required" }),
});

export default IndustrySchema;

export type IndustrySchemaType = z.infer<typeof IndustrySchema>;
