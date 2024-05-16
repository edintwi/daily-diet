import { theme } from '@/src/theme/theme';
import { useFonts } from 'expo-font';
import { PencilSimpleLine } from 'phosphor-react-native';
import { Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { Button } from '../src/components/button/Button';
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
      <View style={{padding: 20, gap: 10}}>
        <Button ButtonVariantions='SOLID' label="Editar" leftIcon={<PencilSimpleLine size={20} color={theme.colors.base.WHITE} />} />
        <Button ButtonVariantions='OUTLINE' label="Editar" leftIcon={<PencilSimpleLine size={20} color={theme.colors.base.GRAY_100} />} />
      </View>
    </ThemeProvider>
  );
}