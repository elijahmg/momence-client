import { ExchangeRate } from "../api/get-exchange-rate.ts";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { AmountInput } from "./amount-input.tsx";
import { CurrencySelect } from "./currency-select.tsx";

interface ExchangeRateFormProps {
  rates: ExchangeRate[]
}

export function ExchangeRateForm({ rates }: ExchangeRateFormProps) {
  const [czkValue, setCzkValue] = useState('')
  const [convertedAmount, setConvertedAmount] = useState('0')
  const [currencyIndex, setCurrencyIndex] = useState(0)

  useEffect(() => {
    convert()
  }, [czkValue, currencyIndex]);

  function convert() {
    const cleanCzkAmount = Math.abs(Number(czkValue));

    const rate = rates[currencyIndex].rate;
    const amount = rates[currencyIndex].amount;

    const result = (cleanCzkAmount * amount) / rate

    setConvertedAmount((Math.round(result * 100) / 100).toLocaleString('us-US'))
  }

  return (
    <FormWrapper>
      <h2>Currency convertor</h2>
      <AmountInput onChange={setCzkValue} value={czkValue} />
      <CurrencySelect rates={rates} value={currencyIndex} onChange={setCurrencyIndex}/>
      <div>Result: {convertedAmount}</div>
    </FormWrapper>
  )
}

const FormWrapper = styled.div`
  display: flex;
  height: min-content;
  border-radius: 8px;
  flex-direction: column;
  gap: 12px;
  
  padding: 24px;
  background-color: #f8f8f8;
  box-shadow: rgba(149, 157, 165, 0.2) 0 8px 24px;

  div {
    display: flex;
    flex-direction: column;
  }
`