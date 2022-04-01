export interface Product {
  productId: number;
  type: string;
  productName: string;
  url_key: string;
  priceValue: string;
  formated_price: string;
  short_description: string;
  description: string;
  sku: string;
  imageUrl: string;
  price: number;
  productImage:string;
  specsProductId:number;
  sessionId:string;
  rating: number;
  rates_count: number;
  rates_number_count: RatesNumberCount;
  images: Array<any>;
  base_image: ProductBaseImage;
  variants: Array<any>;
  in_stock: boolean;
  reviews: Array<ProductReviews>;
  is_saved: boolean;
  created_at: string;
  cartId: string;
  updated_at: string;
  categories: Array<any>;
  status: string;
  featured: number;
  new: number;
  active: number;
  width: string;
  height: string;
  weight: string;
  quantity: number;
  shopId: number;
  priceId: number;
  commission: string;
}

export interface RatesNumberCount {
  has_five: number;
  has_four: number;
  has_three: number;
  has_two: number;
  has_one: number;
}

export interface ProductImage {
  id: number;
  path: string;
  url: string;
  small_image_url: string;
  medium_image_url: string;
  large_image_url: string;
  original_image_url: string;
}

export interface ProductBaseImage {
  small_image_url: string;
  medium_image_url: string;
  large_image_url: string;
  original_image_url: string;
}

export interface ProductReviews {
  name: string;
  title: string;
  comment: string;
  rating: string;
  created_at: string
}

export interface AddProductToCart
{
  ProductId: number;
  CartId: number;
  ProductName: string;
  ImageUrl: string;
  PriceId: number;
}
