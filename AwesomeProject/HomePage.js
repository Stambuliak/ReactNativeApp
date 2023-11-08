import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import App from './App';
import Loader from './components/Loader';
import Details from './components/Details';

const Stack = createNativeStackNavigator();

export const HomePage = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={App}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Loader" component={Loader} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
