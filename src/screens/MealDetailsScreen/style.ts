import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 100%;
`;

export const ContentContainer = styled.View`
  padding: 24px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  width: 100%;
  height: 90%;
  bottom: 0;
  position: absolute;
  background-color: ${(props) => props.theme.colors.base.WHITE};
  gap: 20px;
`;

export const MealTitle = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.BOLD};
  font-size: 20px;
  color: ${(props) => props.theme.colors.base.GRAY_100};
`;

export const MealDesc = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.REGULAR};
  font-size: ${(props) => props.theme.fontSize.LG}px;
  color: ${(props) => props.theme.colors.base.GRAY_200};
`;

export const MealDateTimeTitle = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.BOLD};
  font-size: ${(props) => props.theme.fontSize.MD}px;
  color: ${(props) => props.theme.colors.base.GRAY_100};
`;

export const MealDateTime = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.REGULAR};
  font-size: ${(props) => props.theme.fontSize.LG}px;
  color: ${(props) => props.theme.colors.base.GRAY_100};
`;

export const BottomContainer = styled.View`
  position: absolute;
  bottom: 24px;
  right: 24px;
  left: 24px;
  justify-content: center;
  gap: 10px;
`;
