import * as yup from "yup";

import { report_fields } from "@/entities/report/model";

export const report_schema = yup.object({
  // 기본 필드 유효성 정의
  ...report_fields.reduce((acc, key) => {
    acc[key] = yup.string();
    return acc;
  }, {} as Record<string, yup.StringSchema>),
});
