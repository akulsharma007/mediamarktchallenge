import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ParcelsList from './src/screens/ParcelsList';
// import { initializeStore } from './src/utils/initializeStore';
import ParcelList from './src/screens/ParcelList';
import CarrierParcelList from './src/screens/CarrierParcelList';


const Stack = createNativeStackNavigator();

export default function App() {
  // initializeStore();
  return (
    <View style={styles.defaultMargin}>
      <NavigationContainer>
      <Stack.Navigator detachInactiveScreens={true} screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: '#fff'
        }
      }}>
        <Stack.Screen name="Parcels List" component={ParcelsList} />
        <Stack.Screen name="Parcel List" component={ParcelList} />
        <Stack.Screen name="Carrier Parcels List" component={CarrierParcelList} />
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
    marginBottom: 16
  },
});


