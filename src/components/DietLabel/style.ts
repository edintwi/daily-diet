import styled from "styled-components/native";

export const Container = styled.View`
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.base.GRAY_600};
  width: 144px;
  height: 30px;
  flex-direction: row;
  padding: 5px;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Circle = styled.View<{ isDiet: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50px;
  background-color: ${(props) =>
    props.isDiet
      ? props.theme.colors.product.GREEN_DARK
      : props.theme.colors.product.RED_DARK};
`;

export const DietText = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.REGULAR};
  color: ${(props) => props.theme.colors.base.GRAY_100};
  font-size: ${(props) => props.theme.fontSize.MD}px;
`;
