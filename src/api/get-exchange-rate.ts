import { fetchData } from "./fetch-data.ts";

const EXCHANGE_RATE_URL = 'https://momence-server.onrender.com'

export interface ExchangeRate {
  country: string;
  currency: string;
  amount: number;
  code: string;
  rate: number;
}

export interface ParseExchangeRate {
  date: string;
  rates: ExchangeRate[]
}

export async function getExchangeRate(): Promise<ParseExchangeRate> {
  return await fetchData(EXCHANGE_RATE_URL)
}