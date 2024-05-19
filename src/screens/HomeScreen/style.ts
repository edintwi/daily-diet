import styled, { css } from "styled-components/native";

export const ListMealContainer = styled.View`
  flex-direction: column;
  gap: 10px;
  margin-bottom: 30px;
`;

export const ListTitle = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.REGULAR};
  font-size: ${(props) => `${props.theme.fontSize.LG}px`};
`;
export const MealDateTitle = styled.Text`
  color: ${(props) => props.theme.colors.base.GRAY_200};
  font-family: ${(props) => props.theme.fontFamily.BOLD};
  font-size: ${(props) => `${props.theme.fontSize.XL}px`};
`;

export const FoodCard = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
  min-height: 50px;
  max-height: 50px;
  border-radius: 6px;
  border-width: 1px;
  border-color: ${(props) => props.theme.colors.base.GRAY_500};
`;

export const FoodTextContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 15px;
`

export const FoodTextSeparator = styled.View`
  height: 20px;
  border: 0.5px solid ${(props) => props.theme.colors.base.GRAY_400};
`

export const MealFoodText = styled.Text<{ $foodInfoType: string }>`
  color: ${(props) => props.theme.colors.base.GRAY_200};
  ${(props) =>
    props.$foodInfoType === "NAME"
    ? css`
          text-align: left;
          font-family: ${props.theme.fontFamily.REGULAR};
          font-size: ${props.theme.fontSize.LG}px;
        `
      : css`
          font-size: ${props.theme.fontSize.SM}px;
          font-family: ${props.theme.fontFamily.BOLD};
          border-right: 1px solid ${props.theme.colors.base.GRAY_500};
        `}
`;

export const IsDeit = styled.View<{ $isDiet: boolean }>`
  justify-self: flex-end;
  border-radius: 50px;
  width: 14px;
  height: 14px;

  ${(props) =>
    props.$isDiet
     ? css`
          background-color: ${props.theme.colors.product.GREEN_MID};
        `
      : css`
          background-color: ${props.theme.colors.product.RED_MID};
        `}
`;
