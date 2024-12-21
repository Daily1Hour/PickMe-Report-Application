export default class IndustryReport {
  constructor(public type: string, public features: string, public news: string) {}
}

export const industry_report_keys = Object.keys(new IndustryReport("", "", ""));
