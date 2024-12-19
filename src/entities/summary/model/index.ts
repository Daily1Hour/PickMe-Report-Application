import { Category } from "@/shared/model/Category";

export class Summary {
  constructor(
    public category: Category,
    public name: string,
    public created_at: Date,
    public id: string,
  ) {}
}
