import { AppStack } from "@/src/routes/appStack";
import { theme } from "@/src/theme/theme";
import { useFonts } from "expo-font";
import { StatusBar, Text } from "react-native";
import { ThemeProvider } from "styled-components/native";

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular: require("../assets/fonts/NunitoSans_7pt-Regular.ttf"),
    NunitoSans_700Bold: require("../assets/fonts/NunitoSans_7pt-Bold.ttf"),
  });

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <AppStack /> : <Text>Loading...</Text>}
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle={"dark-content"}
      />
    </ThemeProvider>
  );
}
