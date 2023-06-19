import { ReactNode } from "react";

export interface SEO_Props {
  children: ReactNode,
  title: string,
  author?: string,
  description?: string,
  keyword?: string,
}