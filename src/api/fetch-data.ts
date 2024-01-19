import { ParseExchangeRate } from "./get-exchange-rate.ts";

export async function fetchData(url: string): Promise<ParseExchangeRate> {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Network error')
  }

  return response.json();
}