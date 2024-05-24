import SelectButton from "@/src/components/SelectButton/SelectButton";
import { TextInput } from "@/src/components/TextInput/TextInput";
import { TopBar } from "@/src/components/TopBar/TopBar";
import { Button } from "@/src/components/button/Button";
import React from "react";
import { View } from "react-native";
import {
  Container,
  FormFiledsContainer,
  RowFields,
  SelectTitle,
} from "./style";

export default function NewMealScreen() {
  function handleAddMeal() {}

  return (
    <Container>
      <TopBar />
      <FormFiledsContainer>
        <TextInput label="Nome" />
        <TextInput label="Descrição" isTextArea />
        <RowFields>
          <TextInput label="Data" />
          <TextInput label="Hora" />
        </RowFields>
        <SelectTitle>Está dentro da dieta?</SelectTitle>
        <RowFields>
          <SelectButton label="Sim" type="GOOD" isSelected={false} />
          <SelectButton label="Não" type="BAD" isSelected={false} />
        </RowFields>
        <View
          style={{
            flex: 1,
            bottom: 0,
            justifyContent: "flex-end",
          }}
        >
          <Button
            ButtonVariantions="SOLID"
            label="Cadastrar refeição"
            onPress={() => handleAddMeal()}
          />
        </View>
      </FormFiledsContainer>
    </Container>
  );
}