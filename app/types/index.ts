// app/types/index.ts
export interface CoinItem {
  id: number;
  currency_code: string;
  en_name: string;
  fa_name: string;
  price: string;
  rate: number;
  buy_irt_price: string;
  sell_irt_price: string;
  irt_price: string;
  daily_change_percent: string;
  icon: string;
  about: string;
}
export interface ChartItem {
      price: string;
            irt_price: string;
            time: number;
            date:string;
            jdate: string;
            usd_price: string;
            coin: {
                currency_code: string;
                en_name: string;
                fa_name: string;
            },
            title: string
}




export interface CoinListResponse {
  items: CoinItem[];
  total_page: number;
  page: number | string;
  count: number;
  limit: number | string;
  success: boolean;
  status: number;
}
