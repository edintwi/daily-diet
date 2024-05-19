import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/HomeScreen/HomeScreen";
import StatisticsScreen from "../screens/StatisticsScreen/StatisticsScreen";
import { theme } from "../theme/theme";

  export type AppStackParamsList = {
    Home: undefined;
    Statistics: undefined;
  };

export function AppStack() {

  const Stack = createNativeStackNavigator<AppStackParamsList>();
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: theme.colors.base.WHITE
        }
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Statistics" component={StatisticsScreen} />
    </Stack.Navigator>
  );

}