import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';

import MealStatus from '@/src/components/MealStatus/MealStatus';
import { AppStackParamsList } from '@/src/routes/appStack';
import { Text } from 'react-native';
import { Container, StatisticsContainer } from './style';

type Props = NativeStackScreenProps<AppStackParamsList, "Statistics">;

export default function StatisticsScreen({route, navigation} : Props) {
  return (
    <Container>
      <MealStatus mealStatus expanse canGoBack/>
      <StatisticsContainer>
        <Text>HAA</Text>
      </StatisticsContainer>
    </Container>
  );
}