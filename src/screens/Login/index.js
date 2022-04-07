import {View, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Forms, Header, Input, LoadingBar, NoConnection} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {sendDataLogin, setToken} from './redux/action';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
  const {dataEmail, dataPassword} = useSelector(state => state.register);
  const {isLoading, connection} = useSelector(state => state.global);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const dataUser = {
    email: dataEmail ? dataEmail : email,
    password: dataPassword ? dataPassword : password,
  };

  const tokenChecker = async () => {
    try {
      const value = await AsyncStorage.getItem('@token');
      if (value !== null) {
        dispatch(setToken(value));
        navigation.navigate('MainApp');
      }
    } catch (e) {
      console.log(e);
    }
  };

  // console.log(dataUser, 'login');

  useEffect(() => {
    tokenChecker();
  }, []);

  const login = () => {
    dispatch(sendDataLogin(dataUser));
  };

  const goToRegister = () => navigation.navigate('Register');

  const loginScreen = () => {
    return (
      <View>
        <Forms type="Login" onPressButton={login} onPressText={goToRegister}>
          <View>
            <Input
              onChangeText={value => setEmail(value)}
              value={dataEmail ? dataEmail : email}
              placeholder="Email"
            />
            <Input
              onChangeText={value => setPassword(value)}
              value={dataPassword ? dataPassword : password}
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
      <Header radiusBottom={true} />
      {connection ? loginScreen() : NoConnection(connection)}
    </ScrollView>
  );
};

export default Login;
