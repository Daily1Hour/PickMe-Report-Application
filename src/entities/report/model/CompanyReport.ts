import IReport from "./Report";

export default class CompanyReport implements IReport {
  constructor(
    public id: string | null,
    public name: string,
    public features: string,
    public ideal_talent: string,
    public news: string,
  ) {}
}

export const company_report_keys = Object.keys(new CompanyReport("", "", "", "", ""));
