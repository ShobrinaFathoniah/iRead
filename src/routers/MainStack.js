import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import React from 'react';
import {
  Detail,
  Home,
  Login,
  Register,
  SearchScreen,
  SuccessRegister,
} from '../screens';
import {LIGHT_BLUE_600} from '../helpers/colors';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainStack = () => {
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
        name="Detail"
        component={Detail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const MainApp = () => (
  <Tab.Navigator screenOptions={{headerShown: false}}>
    <Tab.Screen
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({color, size}) => (
          <AntDesign name="home" color={color} size={size} />
        ),
      }}
      name="Home"
      component={Home}
    />
    <Tab.Screen
      options={{
        tabBarLabel: 'Search',
        tabBarIcon: ({color, size}) => (
          <AntDesign name="search1" color={color} size={size} />
        ),
      }}
      name="Search"
      component={SearchScreen}
    />
  </Tab.Navigator>
);

export default MainStack;
