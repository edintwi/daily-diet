import styled, { css } from "styled-components/native";

export type ButtonVariants = "SOLID" | "OUTLINE";

export const ButtonContainer = styled.TouchableOpacity<{
  $ButtonVariants: string;
}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;
  ${(props) =>
    props.$ButtonVariants === "SOLID"
      ? css`
          background-color: ${props.theme.colors.base.GRAY_200};
        `
      : css`
          background: transparent;
          border: 1px solid ${props.theme.colors.base.GRAY_100};
        `};
  border-radius: 6px;
  min-height: 50px;
  max-height: 50px;
`;

export const ButtonLabel = styled.Text<{ $ButtonVariants: string }>`
  color: ${(props) =>
    props.$ButtonVariants === "SOLID"
      ? props.theme.colors.base.WHITE
      : props.theme.colors.base.GRAY_100};
  font-family: ${(props) => props.theme.fontFamily.BOLD};
  font-size: ${(props) => `${props.theme.fontSize.LG}px`};
`;
