import Report from "./Report";

export default class IndustryReport extends Report {
  constructor(
    public id: string | null,
    public type: string,
    public features: string,
    public news: string,
  ) {
    super(id);
  }

  static empty() {
    return new IndustryReport(null, "", "", "");
  }
}
