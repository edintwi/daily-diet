import { HomeHeader } from '@/src/components/HomeHeader/HomeHeader';
import { Icon } from '@/src/components/Icon/Icon';
import MealStatus from '@/src/components/MealStatus/MealStatus';
import { Button } from '@/src/components/button/Button';
import { theme } from '@/src/theme/theme';
import React from 'react';
import { FlatList, ListRenderItemInfo, View } from 'react-native';
import { UserMeals, mealMock } from "./mealMock";
import {
  FoodCard,
  FoodTextContainer,
  FoodTextSeparator,
  IsDeit,
  ListMealContainer,
  ListTitle,
  MealDateTitle,
  MealFoodText,
} from "./style";

export function HomeScreen() {

  function ListHeader() {
    return (
      <View style={{ gap: 40, marginBottom: 20 }}>
        <HomeHeader />
        <MealStatus />
        <View style={{gap: 10}}>
          <ListTitle>Refeições</ListTitle>
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
 function renderItem({ item }: ListRenderItemInfo<UserMeals>) {
     return (
       <ListMealContainer>
         <MealDateTitle>{item.date}</MealDateTitle>
         {item.meals.map((meal) => (
           <FoodCard>
             <FoodTextContainer>
               <MealFoodText $foodInfoType="TIME">{meal.time}</MealFoodText>
               <FoodTextSeparator/>
               <MealFoodText $foodInfoType="NAME">{meal.name}</MealFoodText>
             </FoodTextContainer>

             <IsDeit $isDiet={meal.isDiet} />
           </FoodCard>
         ))}
       </ListMealContainer>
     );
   }
  return (
    <View style={{ padding: 24 }}>
      <FlatList
        data={mealMock}
        ListHeaderComponent={ListHeader}
        renderItem={renderItem}
        keyExtractor={(item) => item.date}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}