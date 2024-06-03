import { DietLabel } from "@/src/components/DietLabel/DietLabel";
import { Icon } from "@/src/components/Icon/Icon";
import { TopBar } from "@/src/components/TopBar/TopBar";
import { Button } from "@/src/components/button/Button";
import { AppStackParamsList } from "@/src/routes/appStack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View } from "react-native";
import {
  BottomContainer,
  Container,
  ContentContainer,
  MealDateTime,
  MealDateTimeTitle,
  MealDesc,
  MealTitle,
} from "./style";

type Props = NativeStackScreenProps<AppStackParamsList, "MealDetailsScreen">;

export default function MealDetailsScreen({ navigation }: Props) {
  return (
    <Container>
      <TopBar title="Refeição" />
      <ContentContainer>
        <View>
          <MealTitle>Sanduíche</MealTitle>
          <MealDesc>
            Sanduíche de pão integral com atum e salada de alface e tomate
          </MealDesc>
        </View>

        <View>
          <MealDateTimeTitle>Data e hora</MealDateTimeTitle>
          <MealDateTime>12/08/2022 às 16:00</MealDateTime>
        </View>

        <DietLabel isDiet />
        <BottomContainer>
          <Button
            ButtonVariantions="SOLID"
            label="Editar refeição"
            leftIcon={<Icon name="pencilSimpleLine" color="white" />}
            onPress={() => navigation.navigate("EditMealScreen")}
          />
          <Button
            ButtonVariantions="OUTLINE"
            label="Excluir refeição"
            leftIcon={<Icon name="trashIcon" color="#000" />}
            onPress={() => navigation.navigate("EditMealScreen")}
          />
        </BottomContainer>
      </ContentContainer>
    </Container>
  );
}
