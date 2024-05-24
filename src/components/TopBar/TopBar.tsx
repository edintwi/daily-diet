import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Icon } from "../Icon/Icon";
import { TopBarContainer, TopBarTitle } from "./style";

export function TopBar() {
  const navigation = useNavigation();

  return (
    <TopBarContainer>
      <TouchableOpacity onPress={navigation.goBack}>
        <Icon name="arrowLeft" size={24} />
      </TouchableOpacity>
      <TopBarTitle>Nova Refeição</TopBarTitle>
      <View></View>
    </TopBarContainer>
  );
}
