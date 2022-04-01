export interface Category {
  id: number;
  categoryName: string;
  categoryNameAr: string;
  description: string;
  image: string;
  slug: string;
  url_path: string;
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  company_id: number;
  position: number;
  status: number;
  parent_id: number;
  created_at: string;
  updated_at: string;
  display_mode: string;
  category_icon_path: string;
  additional: any;
  category_product_in_pwa: number;
  count_product: number;
  translations: Array<CategoryTranslation>;
  children: Array<CategoryChildren>;
  _lft: string;
  _rgt: string;
}

export interface CategoryChildren {
  id: number;
  name: string;
  description: string;
  image: string;
  slug: string;
  url_path: string;
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  company_id: number;
  position: number;
  status: number;
  parent_id: number;
  created_at: string;
  updated_at: string;
  display_mode: string;
  category_icon_path: string;
  additional: any;
  category_product_in_pwa: number;
  count_product: number;
  translations: Array<CategoryTranslation>;
  children: Array<CategoryChildren>;
  _lft: string;
  _rgt: string;

}

export interface CategoryTranslation {
  id: number;
  name: string;
  slug: string;
  description: string;
  url_path: string;
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  category_id: number;
  locale: string;
  company_id: number;
  locale_id: number;
}
