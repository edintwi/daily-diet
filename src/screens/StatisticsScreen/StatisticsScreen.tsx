import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';

import MealStatus from '@/src/components/MealStatus/MealStatus';
import { AppStackParamsList } from '@/src/routes/appStack';
import { CardsWrapper, Container, StatisticsCard, StatisticsCardDescription, StatisticsCardTitle, StatisticsContainer, StatisticsTitle } from './style';

type Props = NativeStackScreenProps<AppStackParamsList, "Statistics">;

export default function StatisticsScreen({route, navigation} : Props) {
  return (
    <Container>
      <MealStatus mealStatus expanse canGoBack />
      <StatisticsContainer>
        <StatisticsTitle>Estatísticas gerais</StatisticsTitle>
        <StatisticsCard $preset={"DEFAULT"}>
          <StatisticsCardTitle>22</StatisticsCardTitle>
          <StatisticsCardDescription>
            melhor sequência de pratos dentro da dieta
          </StatisticsCardDescription>
        </StatisticsCard>
        <StatisticsCard $preset={"DEFAULT"}>
          <StatisticsCardTitle>109</StatisticsCardTitle>
          <StatisticsCardDescription>
            refeições registradas
          </StatisticsCardDescription>
        </StatisticsCard>
        <CardsWrapper>
          <StatisticsCard $preset={"DIET"}>
            <StatisticsCardTitle>99</StatisticsCardTitle>
            <StatisticsCardDescription>
              refeições dentro da dieta
            </StatisticsCardDescription>
          </StatisticsCard>
          <StatisticsCard $preset={"NOTDIET"}>
            <StatisticsCardTitle>10</StatisticsCardTitle>
            <StatisticsCardDescription>
              refeições fora
              da dieta
            </StatisticsCardDescription>
          </StatisticsCard>
        </CardsWrapper>
      </StatisticsContainer>
    </Container>
  );
}