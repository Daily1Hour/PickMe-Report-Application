import { z, ZodTypeAny } from "zod";

import { CompanyReport } from "@/entities/report/model";

// 회사 리포트 스키마 정의
const companySchema = z.object({
  // 기본 필드 유효성 정의
  ...CompanyReport.keys.reduce((acc, key) => {
    // 필드들 옵셔널로 설정
    acc[key] = z.string().optional();
    return acc;
    // 엔터티 클래스의 키값을 기준으로 스키마 생성
  }, {} as Record<keyof CompanyReport, ZodTypeAny>),

  // 추가 필드 유효성 정의
  name: z.string().min(1, { message: "This is required" }),
});

export default companySchema;

export type CompanySchemaType = z.infer<typeof companySchema>;
