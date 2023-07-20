// In App.js in a new project

import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Home';
import Login from './src/Login';
import SignUp from './src/SignUp';
import OnboardingScreen from './src/OnboardingScreen';


const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      </Stack.Navigator>
  );
}

export default AuthStack;