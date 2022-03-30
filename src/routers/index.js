import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Detail, Home, Login, Register} from '../screens';

const Stack = createStackNavigator();

const routers = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Registrasi"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default routers;
