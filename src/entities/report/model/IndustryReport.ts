import IReport from "./Report";

export default class IndustryReport implements IReport {
  constructor(
    public id: string | null,
    public type: string,
    public features: string,
    public news: string,
  ) {}

  static empty() {
    return new IndustryReport(null, "", "", "");
  }

  static get keys() {
    return Object.keys(IndustryReport.empty()) as (keyof IndustryReport)[];
  }
}
