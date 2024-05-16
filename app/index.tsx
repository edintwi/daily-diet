import MealStatus from '@/src/components/MealStatus/MealStatus';
import { theme } from '@/src/theme/theme';
import { useFonts } from 'expo-font';
import { Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { HomeHeader } from '../src/components/HomeHeader/HomeHeader';

export default function HomeScreen() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular: require("../assets/fonts/NunitoSans_7pt-Regular.ttf"),
    NunitoSans_700Bold: require("../assets/fonts/NunitoSans_7pt-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  return (
    <ThemeProvider theme={theme}>
      <View style={{ padding: 24, gap: 40 }}>
        <HomeHeader />
        <MealStatus />
      </View>
    </ThemeProvider>
  );
}