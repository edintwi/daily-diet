import React from "react";
import { Circle, Label, SelectContainer } from "./style";

interface SelectButtonProps {
  label: string;
  type: string;
  isSelected: boolean;
}

export default function SelectButton({
  label,
  type,
  isSelected,
}: SelectButtonProps) {
  return (
    <SelectContainer $type={type} isSelected={isSelected}>
      <Circle type={type} />
      <Label>{label}</Label>
    </SelectContainer>
  );
}
