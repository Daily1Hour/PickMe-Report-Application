import * as yup from "yup";

import { company_report_fields } from "@/entities/report/model";

export default yup.object({
  // 기본 필드 유효성 정의
  ...company_report_fields.reduce((acc, key) => {
    acc[key] = yup.string();
    return acc;
  }, {} as Record<string, yup.StringSchema>),

  // 추가 필드 유효성 정의
  name: yup.string().required("Name is required"),
});
