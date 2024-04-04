import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Main from '../screens/Main';
import InstructionCardRoutes from '../screens/InstructionCardRoutes';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{headerShown: false}} name="Главная" component={Main} />
      <Stack.Screen 
        options={({ route }) => ({ title: route.params.instruction.title })}
        name="InstructionCardRoutes" 
        component={InstructionCardRoutes} 
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
