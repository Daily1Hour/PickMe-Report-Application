import { Category } from "@/shared/model/Category";

export class Summary {
  constructor(
    public id: string,
    public category: Category,
    public created_at: Date,
    public updated_at: Date,
    public name?: string,
  ) {}
}
