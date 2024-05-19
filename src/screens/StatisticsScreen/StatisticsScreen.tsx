import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text, View } from 'react-native';

import { AppStackParamsList } from '@/src/routes/appStack';

type Props = NativeStackScreenProps<AppStackParamsList, "Statistics">;

export default function StatisticsScreen({route, navigation} : Props) {
  return (
    <View>
      <Text>StatisticsScreen</Text>
    </View>
  )
}