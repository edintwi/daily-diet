import { useFonts } from 'expo-font';
import { Text, View } from 'react-native';

export default function HomeScreen() {

  const [fontsLoaded] = useFonts({
    NunitoSansRegular: require("../assets/fonts/NunitoSans_7pt-Regular.ttf"),
    NunitoSansBold: require("../assets/fonts/NunitoSans_7pt-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  return (
    <View>
      <Text style={{fontFamily: 'NunitoSansBold'}}>Home</Text>
    </View>
  );
}