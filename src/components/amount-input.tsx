import React from "react";

interface AmountInputProps {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>
}

export function AmountInput({ onChange, value }: AmountInputProps) {
  return (
    <div>
      CZK Amount
      <input type="number" value={value} onChange={(e) => onChange(e.target.value)}/>
    </div>
  )
}