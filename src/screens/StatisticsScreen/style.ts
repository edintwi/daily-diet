import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.base.WHITE};
`;
export const StatisticsContainer = styled.View`
  gap: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: ${(props) => props.theme.colors.base.WHITE};
  width: 100%;
  height: 82%;
  position: absolute;
  bottom: 0;
  padding: 24px;
`;

export const StatisticsTitle = styled.Text`
  text-align: center;
  font-family: ${(props) => props.theme.fontFamily.BOLD};
  font-size: ${(props) => props.theme.fontSize.MD}px;
  color: ${(props) => props.theme.colors.base.GRAY_100};
`;

export const StatisticsCardsContainer = styled.View`
  flex-direction: column;
  gap: 5px;
`;

export const StatisticsCard = styled.View<{ $preset: string }>`
  flex-direction: column;
  border-radius: 8px;
  height: 100px;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 5px;
  background-color: ${(props) =>
    props.$preset === "DEFAULT"
      ? props.theme.colors.base.GRAY_600
      : props.$preset === "DIET"
      ? props.theme.colors.product.GREEN_LIGHT
      : props.theme.colors.product.RED_LIGHT};
`;
export const StatisticsCardTitle = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.BOLD};
  font-size: ${(props) => props.theme.fontSize.XXL}px;
  color: ${(props) => props.theme.colors.base.GRAY_100};
`;

export const StatisticsCardDescription = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.REGULAR};
  font-size: ${(props) => props.theme.fontSize.MD}px;
  color: ${(props) => props.theme.colors.base.GRAY_200};
  text-align: center;
`;

export const CardsWrapper = styled.View`
  align-self: center;
  width: 50%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;