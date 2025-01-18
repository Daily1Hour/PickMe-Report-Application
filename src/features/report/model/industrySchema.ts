import { z, ZodTypeAny } from "zod";
import { toTypedSchema } from "@vee-validate/zod";

import { industry_report_fields } from "@/entities/report/model";

export default toTypedSchema(
  z.object({
    // 기본 필드 유효성 정의
    ...industry_report_fields.reduce((acc, key) => {
      acc[key] = z.string().optional();
      return acc;
    }, {} as Record<string, ZodTypeAny>),

    // 추가 필드 유효성 정의
    type: z.string().min(1, { message: "This is required" }),
  }),
);
