import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Circle, Label, SelectContainer } from "./style";

interface SelectButtonProps extends TouchableOpacityProps {
  label: string;
  type: string;
  isSelected: boolean;
}

export default function SelectButton({
  label,
  type,
  isSelected,
  ...rest
}: SelectButtonProps) {
  return (
    <SelectContainer $type={type} isSelected={isSelected} {...rest}>
      <Circle type={type} />
      <Label>{label}</Label>
    </SelectContainer>
  );
}
