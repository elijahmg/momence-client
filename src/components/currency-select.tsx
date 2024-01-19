import React from "react";
import { ExchangeRate } from "../api/get-exchange-rate.ts";

interface CurrencySelectProps {
  value: number;
  onChange: React.Dispatch<React.SetStateAction<number>>;
  rates: ExchangeRate[]
}

export function CurrencySelect({ onChange, value, rates }: CurrencySelectProps) {
  return (
    <div>
      Currency convert to
      <select value={value} onChange={(e) => onChange(Number(e.target.value))}>
        {rates.map(({ code }, index) => <option value={index} key={code}>{code}</option>)}
      </select>
    </div>
  )
}