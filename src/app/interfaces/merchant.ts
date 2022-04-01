export interface Merchant {
  id: number;
  name: string
}

export interface Merchants {
  key: string;
  merchants: Array<Merchant>
}
