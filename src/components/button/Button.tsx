import React from 'react';
import {
  TouchableOpacityProps
} from "react-native";
import { ButtonContainer, ButtonLabel, ButtonVariants } from './style';

interface ButtonProps extends TouchableOpacityProps {
  label: string;
  leftIcon?: React.ReactElement;
  ButtonVariantions: ButtonVariants;
}
export function Button({label, leftIcon, ButtonVariantions} : ButtonProps) {
  return (
    <ButtonContainer $ButtonVariants={ButtonVariantions}>
      {leftIcon}
      <ButtonLabel $ButtonVariants={ButtonVariantions}> {label} </ButtonLabel>
    </ButtonContainer>
  );
}