import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Background from './Background';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';


const OnboardingScreen = (props) => {
    function HomeScreen() {
        return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{fontSize:30}}>Home!</Text>
          </View>
        );
      }
      
      function SettingsScreen() {
        return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
          </View>
        );
      }
      function Settings() {
        return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Set</Text>
          </View>
        );
      }

    const Tab = createBottomTabNavigator();
  return (
      <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Set" component={Settings} />
    </Tab.Navigator>
  );
};

export default OnboardingScreen;
