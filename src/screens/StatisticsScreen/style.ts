import styled, { css } from "styled-components/native";


export const Container = styled.View`
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.base.WHITE};
`
export const TopBarContainer = styled.View<{ $isDeit: boolean }>`
  width: 100%;
  height: 200px;
  ${(props) =>
    props.$isDeit
      ? css`
          background-color: ${props.theme.colors.product.GREEN_LIGHT};
        `
      : css`
          background-color: ${props.theme.colors.product.RED_LIGHT};
        `}
`;

export const StatisticsContainer = styled.View`
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: ${(props) => props.theme.colors.base.WHITE};
  width: 100%;
  height: 80%;
  position: absolute;
  bottom: 0;
  flex: 1;
  
`;