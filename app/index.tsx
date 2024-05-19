import { HomeScreen } from '@/src/screens/HomeScreen/HomeScreen';
import { theme } from '@/src/theme/theme';
import { useFonts } from 'expo-font';
import { Text } from 'react-native';
import { ThemeProvider } from 'styled-components/native';

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular: require("../assets/fonts/NunitoSans_7pt-Regular.ttf"),
    NunitoSans_700Bold: require("../assets/fonts/NunitoSans_7pt-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  return (
    <ThemeProvider theme={theme}>
      <HomeScreen/>
    </ThemeProvider>
  );
}