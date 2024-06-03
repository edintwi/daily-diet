import styled from "styled-components/native";

export const Container = styled.KeyboardAvoidingView`
  width: 100%;
  height: 100%;
`;

export const FormFiledsContainer = styled.View`
  gap: 20px;
  flex-direction: column;
  position: absolute;
  padding: 24px;
  width: 100%;
  height: 90%;
  bottom: 0;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  background-color: ${(props) => props.theme.colors.base.WHITE};
`;
export const RowFields = styled.View`
  width: 100%;
  gap: 5px;
  flex-direction: row;
`;

export const SelectTitle = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.BOLD};
  color: ${(props) => props.theme.colors.base.GRAY_200};
  font-size: ${(props) => props.theme.fontSize.MD}px;
`;
