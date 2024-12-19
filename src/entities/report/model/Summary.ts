import { Category } from "./Category";

export default class Summary {
  constructor(
    public category: Category,
    public name: string,
    public created_at: Date,
    public id: string,
  ) {}
}
