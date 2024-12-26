import { Category } from "@/shared/model/Category";

export interface SummaryDTO {
  reportId: string;
  category: Category;
  title: string;
  createdAt: Date;
  updatedAt: Date;
}
