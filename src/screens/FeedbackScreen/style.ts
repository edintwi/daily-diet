import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 24px;
  width: 100%;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;
export const FeedbackTitle = styled.Text<{ $feedback: boolean }>`
  ${(props) =>
    props.$feedback
      ? css`
          color: ${(props) => props.theme.colors.product.GREEN_DARK};
        `
      : css`
          color: ${(props) => props.theme.colors.product.RED_DARK};
        `}
  font-family: ${(props) => props.theme.fontFamily.BOLD};
  font-size: ${(props) => props.theme.fontSize.XXL}px;
  text-align: center;
`;
export const Message = styled.Text`
  text-align: center;
  font-family: ${(props) => props.theme.fontFamily.REGULAR};
  font-size: ${(props) => props.theme.fontSize.LG}px;
`;

export const SucessImage = styled.Image``;
