import styled, { css } from "styled-components/native";

export const Circle = styled.View<{ type: string }>`
  ${(props) =>
    props.type === "GOOD"
      ? css`
          background-color: ${props.theme.colors.product.GREEN_DARK};
        `
      : css`
          background-color: ${props.theme.colors.product.RED_DARK};
        `}
  width: 10px;
  height: 10px;
  border-radius: 50px;
`;

export const Label = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.BOLD};
  color: ${(props) => props.theme.colors.base.GRAY_200};
  font-size: ${(props) => props.theme.fontSize.MD}px;
`;

export const SelectContainer = styled.TouchableOpacity<{
  $type: string;
  isSelected: boolean;
}>`
  ${(props) =>
    props.isSelected
      ? props.$type === "GOOD"
        ? css`
            background-color: ${props.theme.colors.product.GREEN_LIGHT};
            border: 1px solid ${props.theme.colors.product.GREEN_DARK};
          `
        : css`
            background-color: ${props.theme.colors.product.RED_LIGHT};
            border: 1px solid ${props.theme.colors.product.RED_DARK};
          `
      : css`
          background-color: ${props.theme.colors.base.GRAY_600};
        `};
  border-radius: 6px;
  height: 50px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 10px;
  min-width: 50%;
`;
