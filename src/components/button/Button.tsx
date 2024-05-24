import React from "react";
import { TouchableOpacityProps } from "react-native";
import { ButtonContainer, ButtonLabel, ButtonVariants } from "./style";

interface ButtonProps extends TouchableOpacityProps {
  label: string;
  leftIcon?: React.ReactElement;
  ButtonVariantions: ButtonVariants;
  onPress: () => void;
}
export function Button({
  label,
  leftIcon,
  ButtonVariantions,
  onPress,
}: ButtonProps) {
  return (
    <ButtonContainer $ButtonVariants={ButtonVariantions} onPress={onPress}>
      {leftIcon}
      <ButtonLabel $ButtonVariants={ButtonVariantions}> {label} </ButtonLabel>
    </ButtonContainer>
  );
}
