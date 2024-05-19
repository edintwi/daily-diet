import { theme } from "@/src/theme/theme";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Icon } from "../Icon/Icon";
import {
  MealStatusContainer,
  MealStatusDescription,
  MealStatusTitle,
  TextWrapper,
} from "./style";

type MealStatusProps = {
  onPress: () => void;
  mealStatus: boolean;
}

export default function MealStatus({ onPress, mealStatus }: MealStatusProps) {
  return (
    <MealStatusContainer $mealStatus={mealStatus}>
      <TextWrapper>
        <MealStatusTitle>90,86%</MealStatusTitle>
        <MealStatusDescription>
          das refeições dentro da dieta
        </MealStatusDescription>
      </TextWrapper>
      <TouchableOpacity onPress={onPress}>
        <Icon
          name="arrowUpRight"
          size={24}
          color={theme.colors.product.GREEN_DARK}
        />
      </TouchableOpacity>
    </MealStatusContainer>
  );
}
