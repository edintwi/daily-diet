import React from "react";
import { View } from "react-native";
import {
    MealStatusContainer,
    MealStatusDescription,
    MealStatusTitle
} from "./style";

export default function MealStatus() {
  return (
      <MealStatusContainer $mealStatus>
      <View style={{alignItems: "center", gap: 0}}>
        <MealStatusTitle> 90,86% </MealStatusTitle>
        <MealStatusDescription>
          das refeições dentro da dieta
        </MealStatusDescription>
      </View>
    </MealStatusContainer>
  );
}
