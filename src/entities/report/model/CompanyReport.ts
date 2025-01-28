import Report from "./Report";

export default class CompanyReport extends Report {
  constructor(
    public id: string | null,
    public name: string,
    public features: string,
    public ideal_talent: string,
    public news: string,
  ) {
    super(id);
  }

  static empty() {
    return new CompanyReport(null, "", "", "", "");
  }
}
