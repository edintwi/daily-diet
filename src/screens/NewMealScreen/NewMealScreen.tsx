import SelectButton from "@/src/components/SelectButton/SelectButton";
import { TextInput } from "@/src/components/TextInput/TextInput";
import { TopBar } from "@/src/components/TopBar/TopBar";
import { Button } from "@/src/components/button/Button";
import { AppStackParamsList } from "@/src/routes/appStack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { View } from "react-native";
import {
  Container,
  FormFiledsContainer,
  RowFields,
  SelectTitle,
} from "./style";

type Props = NativeStackScreenProps<AppStackParamsList, "NewMealScreen">;

export default function NewMealScreen({ navigation }: Props) {
  const [statusSelected, setStatus] = useState("");

  function handleAddMeal() {
    navigation.navigate("FeedbackScreen", { isDiet: false });
  }

  return (
    <Container>
      <TopBar title="Nova refeição" />
      <FormFiledsContainer>
        <TextInput label="Nome" />
        <TextInput label="Descrição" isTextArea />
        <RowFields>
          <TextInput label="Data" />
          <TextInput label="Hora" />
        </RowFields>
        <View style={{ gap: 10 }}>
          <SelectTitle>Está dentro da dieta?</SelectTitle>
          <RowFields>
            <SelectButton
              label="Sim"
              type="GOOD"
              isSelected={statusSelected === "GOOD" ? true : false}
              onPress={() => setStatus("GOOD")}
            />
            <SelectButton
              label="Não"
              type="BAD"
              isSelected={statusSelected === "BAD" ? true : false}
              onPress={() => setStatus("BAD")}
            />
          </RowFields>
        </View>

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
