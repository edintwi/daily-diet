import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: column;
  width: 100%;
  gap: 40px;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const UserProfile = styled.Image`
  border-radius: 50px;
  border: 1px solid ${(props) => props.theme.colors.base.GRAY_100};
  width: 40px;
  height: 40px; 
`;