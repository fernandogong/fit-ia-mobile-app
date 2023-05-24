import React from 'react';
import { StyleSheet } from 'react-native';

import EntrarScreen from './src/components/EntrarScreen.js'
import InicioScreen from './src/components/InicioScreen.js'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="InicioScreen" component={InicioScreen} options={{headerShown: false}}/>
        <Stack.Screen name="EntrarScreen" component={EntrarScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
