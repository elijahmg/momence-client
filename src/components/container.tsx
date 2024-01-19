import { useQuery } from "react-query";
import { getExchangeRate, ParseExchangeRate } from "../api/get-exchange-rate.ts";
import { DateLabel } from "./date.tsx";
import { RatesTables } from "./rates-tables.tsx";
import styled from "styled-components";
import { ExchangeRateForm } from "./exchange-rate-form.tsx";

export function Container() {
  const { data, isLoading } = useQuery<ParseExchangeRate>('rates', getExchangeRate)

  if (isLoading) {
    return <div>Loading exchange rate...</div>;
  }

  if (!data) {
    return <div>No data</div>;
  }

  const { date, rates } = data;

  return <Wrapper>
    <ExchangeRateForm rates={rates}/>
    <TableWrapper>
      <DateLabel>{date}</DateLabel>
      <RatesTables rates={rates}/>
    </TableWrapper>
  </Wrapper>
}

const Wrapper = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;
  
  @media (min-width: 431px) {
    flex-direction: row;
  }
`

const TableWrapper = styled.div`
  height: 80vh;
  overflow: scroll;
  background-color: #f8f8f8;
  padding: 24px;
  box-shadow: rgba(149, 157, 165, 0.2) 0 8px 24px;
  border-radius: 8px;
`
