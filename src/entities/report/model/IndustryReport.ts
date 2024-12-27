import IReport from "./Report";

export default class IndustryReport implements IReport {
  constructor(
    public id: string | null,
    public type: string,
    public features: string,
    public news: string,
  ) {}
}

export const industry_report_fields = ["type", "features", "news"] as const;
