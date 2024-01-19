import React from "react";
import styled from "styled-components";

interface DateLabelProps {
  children: React.ReactNode;
}

export function DateLabel({ children }: DateLabelProps) {
  return <Label>Exchange rate for: <b>{children}</b></Label>
}

const Label = styled.span`
  margin: 8px 12px;
  display: block;
`