import styled from "styled-components/native";

export const TopBarContainer = styled.View`
  background-color: ${(props) => props.theme.colors.base.GRAY_500};
  height: 90px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  flex-direction: row;
`;

export const TopBarTitle = styled.Text`
  text-align: center;
  font-family: ${(props) => props.theme.fontFamily.BOLD};
  font-size: ${(props) => props.theme.fontSize.XL}px;
  text-align: center;
`;
