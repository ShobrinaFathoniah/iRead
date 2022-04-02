import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Detail, Home, Login, Register, SuccessRegister} from '../screens';
import {useSelector} from 'react-redux';

const Stack = createStackNavigator();

const MainStack = () => {
  // const {loading} = useSelector(state => state.global);
  //if loading blabla -> bisa di root
  //klu msh ga bisa bole dicompoonent tp pk state yg didlobalreducer

  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Success Register"
        component={SuccessRegister}
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

export default MainStack;
