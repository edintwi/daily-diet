import React from "react";
import { View } from "react-native";
import { Label, StyledInput } from "./style";

interface TextInputProps {
  label: string;
  isTextArea?: boolean;
}

export function TextInput({ label, isTextArea = false }: TextInputProps) {
  return (
    <View>
      <Label>{label}</Label>
      <StyledInput $isTextArea={isTextArea} />
    </View>
  );
}
