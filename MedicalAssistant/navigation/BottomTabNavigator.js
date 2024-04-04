import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import Main from '../screens/Main';
import TextToSpeechScreen from '../screens/TextToSpeechScreen';
import InstructionList from '../screens/InstructionList';
import InstructionCard from '../screens/InstructionCard';
import Intresting from '../screens/Intresting';
import AppNavigator from './AppNavigator';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const InstructionStack = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="InstructionList" component={InstructionList} />
      <Stack.Screen name="InstructionCard" component={InstructionCard} />
    </Stack.Navigator>
  );
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'rgba(256, 256, 256, 1)',
          paddingTop: 4,
          position: 'absolute',
          borderTopWidth: 0.7,
      },
    })}
    initialRouteName={"Экстренная ситуация"}>
      <Tab.Screen name="Научиться" component={InstructionStack} options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="school" color={color} size={size} /> 
        ),
        headerShown: false
      }} />
      <Tab.Screen name="Экстренная ситуация" component={AppNavigator} options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="flame" color={color} size={size} /> 
        ),
        headerShown: false
      }} />
      <Tab.Screen name="Это интересно" component={Intresting} options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="bulb" color={color} size={size} /> 
        ),
        headerShown: false
      }}/>
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
