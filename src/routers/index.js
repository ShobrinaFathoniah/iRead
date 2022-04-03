import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './MainStack';
import {useDispatch} from 'react-redux';
import NetInfo from '@react-native-community/netinfo';
import {setConnection, setRefreshing} from '../store/globalAction';

const Root = () => {
  const dispatch = useDispatch();

  NetInfo.addEventListener(state => {
    console.log('Connection type', state.type);
    console.log('Is connected?', state.isConnected);

    dispatch(setConnection(state.isConnected));
    dispatch(setRefreshing(false));
  });

  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default Root;

//ada props theme navigation
