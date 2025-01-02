import IReport from "./Report";

export default class CompanyReport implements IReport {
  constructor(
    public id: string | null,
    public name: string,
    public features: string,
    public ideal_talent: string,
    public news: string,
  ) {}

  static empty() {
    return new CompanyReport(null, "", "", "", "");
  }
}

export const company_report_fields = ["name", "features", "ideal_talent", "news"] as const;
