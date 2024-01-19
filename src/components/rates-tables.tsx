import { useMemo } from "react";
import styled from "styled-components";
import { ExchangeRate } from "../api/get-exchange-rate.ts";

interface RatesTablesProps {
  rates: ExchangeRate[]
}

export function RatesTables({ rates }: RatesTablesProps) {
  const sortedRatesByCountry = useMemo(() =>
    rates.sort((a, b) => {
      if (a.country > b.country) return 1;
      if (a.country < b.country) return -1;
      return 0;
    })
  , [])



  return (
    <div>
      <Row>
        <HeaderSpan>Country</HeaderSpan>
        <HeaderSpan>Currency</HeaderSpan>
        <HeaderSpan>Amount</HeaderSpan>
        <HeaderSpan>Code</HeaderSpan>
        <HeaderSpan>Rate</HeaderSpan>
      </Row>
      {sortedRatesByCountry.map(({ country, currency, amount, code, rate }) => (
        <Row key={code}>
          <span>{country}</span>
          <span>{currency}</span>
          <span>{amount}</span>
          <span>{code}</span>
          <span>{rate}</span>
        </Row>
      ))}
    </div>
  )
}

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  
  span {
    border: 1px solid grey;
    padding: 8px 12px;
  }
`

const HeaderSpan = styled.span`
  font-weight: 600;
`