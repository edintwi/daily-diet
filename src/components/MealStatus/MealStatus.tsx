import { theme } from "@/src/theme/theme";
import { useNavigation } from "@react-navigation/native";
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
  onPress?: () => void;
  mealStatus: boolean;
  expanse?: boolean;
  canGoBack?: boolean;
}

export default function MealStatus({ onPress, mealStatus, expanse, canGoBack }: MealStatusProps) {

  const navigation = useNavigation();
  
  return (
    <MealStatusContainer $mealStatus={mealStatus} $expanse={expanse}>
      {canGoBack && (
        <TouchableOpacity
          onPress={navigation.goBack}
          style={{ position: "absolute", left: 24, top: 24 }}
        >
          <Icon
            name="arrowLeft"
            size={24}
            color={theme.colors.product.GREEN_DARK}
          />
        </TouchableOpacity>
      )}
      <TextWrapper>
        <MealStatusTitle>90,86%</MealStatusTitle>
        <MealStatusDescription>
          das refeições dentro da dieta
        </MealStatusDescription>
      </TextWrapper>

      {onPress && (
        <TouchableOpacity
          onPress={onPress}
          style={{ position: "absolute", right: 10, top: 10 }}
        >
          <Icon
            name="arrowUpRight"
            size={24}
            color={theme.colors.product.GREEN_DARK}
          />
        </TouchableOpacity>
      )}
    </MealStatusContainer>
  );
}
