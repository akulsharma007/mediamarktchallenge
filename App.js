import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import BarcodeScanner from './src/components/BarcodeScanner';
import CarrierParcelList from './src/screens/CarrierParcelList';
import ParcelList from './src/screens/ParcelList';
import ParcelsList from './src/screens/ParcelsList';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.defaultMargin}>
      <NavigationContainer>
        <Stack.Navigator
          detachInactiveScreens
          screenOptions={{
            headerShown: false,
            contentStyle: {
              backgroundColor: '#fff',
            },
          }}>
          <Stack.Screen name="Parcels List" component={ParcelsList} />
          <Stack.Screen name="Parcel List" component={ParcelList} />
          <Stack.Screen name="Carrier Parcels List" component={CarrierParcelList} />
          <Stack.Screen name="Barcode Scanner" component={BarcodeScanner} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  defaultMargin: {
    flex: 1,
    marginHorizontal: 16,
    marginTop: 64,
    marginBottom: 16,
  },
});
