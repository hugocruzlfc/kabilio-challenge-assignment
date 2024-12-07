import { Tag } from "@prisma/client";

export interface AdminFilters {
  search?: string;
  tag?: Tag;
  status?: boolean;
  page: number;
  orderBy?: string;
  orderDir?: "asc" | "desc";
}
