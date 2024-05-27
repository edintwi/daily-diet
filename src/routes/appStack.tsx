import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FeedbackScreen } from "../screens/FeedbackScreen/FeedbackScreen";
import { HomeScreen } from "../screens/HomeScreen/HomeScreen";
import NewMealScreen from "../screens/NewMealScreen/NewMealScreen";
import StatisticsScreen from "../screens/StatisticsScreen/StatisticsScreen";
import { theme } from "../theme/theme";

export type AppStackParamsList = {
  Home: undefined;
  Statistics: undefined;
  NewMealScreen: undefined;
  FeedbackScreen: { isDiet: boolean };
};

export function AppStack() {
  const Stack = createNativeStackNavigator<AppStackParamsList>();

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: theme.colors.base.WHITE,
        },
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Statistics" component={StatisticsScreen} />
      <Stack.Screen name="NewMealScreen" component={NewMealScreen} />
      <Stack.Screen name="FeedbackScreen" component={FeedbackScreen} />
    </Stack.Navigator>
  );
}
