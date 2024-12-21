export default class CompanyReport {
  constructor(
    public name: string,
    public features: string,
    public ideal_talent: string,
    public news: string,
  ) {}
}

export const company_report_keys = Object.keys(new CompanyReport("", "", "", ""));
