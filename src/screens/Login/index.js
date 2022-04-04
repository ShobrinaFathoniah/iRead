import {View, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Forms, Header, Input, LoadingBar, NoConnection} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {sendDataLogin, setToken} from './redux/action';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {dataEmail, dataPassword} = useSelector(state => state.register);
  const {isLoading, connection} = useSelector(state => state.global);
  const {dataToken} = useSelector(state => state.login);

  const dispatch = useDispatch();

  const dataUser = {
    email: email,
    password: password,
  };

  // if (dataToken) {
  //   navigation.navigate('Home');
  // }

  const tokenChecker = async () => {
    try {
      const value = await AsyncStorage.getItem('@token');
      if (value !== null) {
        dispatch(setToken(value));
        navigation.navigate('Home');
      }
    } catch (e) {
      console.log(e);
    }
  };

  const login = () => {
    dispatch(sendDataLogin(dataUser, email, password));
  };

  useEffect(() => {
    tokenChecker();
  }, []);

  const goToRegister = () => navigation.navigate('Register');

  const loginScreen = () => {
    return (
      <View>
        <Forms type="Login" onPressButton={login} onPressText={goToRegister}>
          <View>
            <Input
              onChangeText={value => setEmail(value)}
              value={email}
              placeholder="Email"
            />
            <Input
              onChangeText={value => setPassword(value)}
              value={password}
              placeholder="Password"
              secureTextEntry={true}
            />
          </View>
        </Forms>
        {LoadingBar(isLoading)}
      </View>
    );
  };

  return (
    <ScrollView>
      <Header />
      {connection ? loginScreen() : NoConnection(connection)}
    </ScrollView>
  );
};

export default Login;
