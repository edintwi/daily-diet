import { HomeHeader } from '@/src/components/HomeHeader/HomeHeader';
import { Icon } from '@/src/components/Icon/Icon';
import MealStatus from '@/src/components/MealStatus/MealStatus';
import { Button } from '@/src/components/button/Button';
import { theme } from '@/src/theme/theme';
import React from 'react';
import { Text, View } from 'react-native';

export function HomeScreen() {
  return (
    <View style={{ padding: 24, gap: 40 }}>
      <HomeHeader />
      <MealStatus />
      <View style={{ gap: 10 }}>
        <Text
          style={{
            fontFamily: theme.fontFamily.REGULAR,
            fontSize: theme.fontSize.LG,
          }}
        >
          Refeições
        </Text>
        <Button
          ButtonVariantions="SOLID"
          label="Nova refeição"
          leftIcon={
            <Icon name="plusIcon" size={24} color={theme.colors.base.WHITE} />
          }
        />
      </View>
    </View>
  );
}