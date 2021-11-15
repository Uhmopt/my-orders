import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import MyOrders from 'src/screens/myOrders';
import {screenOptions} from './screenOptions';

const Stack = createNativeStackNavigator();

export function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="My Orders" component={MyOrders} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
