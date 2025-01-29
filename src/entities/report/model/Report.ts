interface IReport {
  id: string | null;
}

export default abstract class Report implements IReport {
  constructor(public id: string | null) {}

  static empty(): IReport {
    throw new Error("Method not implemented.");
  }

  protected static _keys: (keyof IReport)[];
  static get keys() {
    return (this._keys = // id를 제외하고 런타임 시에 클래스의 키들을 추출
      this._keys || (Object.keys(this.empty()).filter((key) => key !== "id") as (keyof IReport)[]));
  }
}
