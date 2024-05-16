import styled, { css } from "styled-components/native";

export const MealStatusContainer = styled.View<{ $mealStatus: boolean }>`
  ${(props) =>
    props.$mealStatus
      ? css`
          background-color: ${props.theme.colors.product.GREEN_LIGHT};
        `
      : css`
          background-color: ${props.theme.colors.product.RED_LIGHT};
        `}
  min-height: 102px;
  max-height: 102px;
  border-radius: 6px;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
`;

export const MealStatusTitle = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.BOLD};
  font-size: ${(props) => `${props.theme.fontSize.XXXL}px`};
`;

export const MealStatusDescription = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.REGULAR};
  font-size: ${(props) => `${props.theme.fontSize.MD}px`};
  color: ${(props) => props.theme.colors.base.GRAY_200};
`;

export const IconNavigatorContainer = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
`;
