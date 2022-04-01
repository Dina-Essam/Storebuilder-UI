export interface MainSlider {
  creationDate?: Date;
  id?: number;
  imageUrl?: string;
  title?: string;
  isDelete?: boolean;
  redirectTypeId?: number;
  redirectValue?: number;
  shopId?: number;
  tenantId?: number;
  updateOn?: Date;
}


export interface Configuration {
  id: number;
  bannerId:number;
  categoryId:number;
  searchData:string;
  order:number;
  shopId:number;
  showRoomTypeId:number;
  topNumber:number;
}