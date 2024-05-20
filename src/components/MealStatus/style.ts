import styled, { css } from "styled-components/native";

export const MealStatusContainer = styled.View<{
  $mealStatus: boolean;
  $expanse?: boolean;
}>`
  align-items: center;
  ${(props) =>
    props.$mealStatus
      ? css`
          background-color: ${props.theme.colors.product.GREEN_LIGHT};
        `
      : css`
          background-color: ${props.theme.colors.product.RED_LIGHT};
        `}
  ${(props) =>
    props.$expanse ?
    css`
      height: 150px;
      align-items: center;
      `
      : css`
    height: 100px;`}

  flex-direction: row;
  width: 100%;
  padding: 10px;
  border-radius: 6px;
`;

export const TextWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
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
