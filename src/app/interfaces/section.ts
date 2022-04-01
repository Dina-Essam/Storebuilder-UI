export interface SectionAttribute {
  key: string;
  value: string;
}
export interface Section {
  id: number;
  order: number;
  name: string;
  showRoomTypeId: number;
  categoryId:number;
  bannerId:number;
  topNumber:number;
  count:number;
  base_url: string;
  endpoint: string;
  layout: string;
  data_type: string;
  call_type: string;
  title: string;
  sub_title: string;
  description: string;
  button: string,
  bannerData:Array<any>;
  data: Array<any>
  parameters: Array<any>;
  attributes: Array<SectionAttribute>
}
export interface SectionConfiguration {
  id: number;
  shopId: number;
  themeKeyConfigurationId: number;
  value: string;
}