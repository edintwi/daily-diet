import { theme } from '@/src/theme/theme';
import { useFonts } from 'expo-font';
import { Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components/native';

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
      <View>
        <Text
          style={{
            fontFamily: theme.fontFamily.BOLD,
            fontSize: theme.fontSize.XXL,
            color: theme.colors.product.RED_DARK,
          }}
        >
          Home
        </Text>
      </View>
    </ThemeProvider>
  );
}