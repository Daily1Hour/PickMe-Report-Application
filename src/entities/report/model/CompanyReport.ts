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

  static get keys() {
    return Object.keys(CompanyReport.empty()).filter(
      (key) => key !== "id",
    ) as (keyof CompanyReport)[];
  }
}
