import {View, ScrollView, Alert} from 'react-native';
import React, {useState} from 'react';
import {Forms, Header, Input, LoadingBar} from '../../components';
import {BASE_URL} from '@env';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {setToken} from './redux/action';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {dataEmail, dataPassword} = useSelector(state => state.register);

  const dispatch = useDispatch();

  const dataUser = {
    email: email,
    password: password,
  };

  const login = async () => {
    try {
      if (email && password) {
        // internetChecker();

        const res = await axios.post(`${BASE_URL}/auth/login`, dataUser);

        console.log(res, 'res');
        console.log(res.data.tokens.access.token);

        const token = res.data.tokens.access.token;
        if (token) {
          dispatch(setToken(token));
          navigation.navigate('Home');
        } else {
          Alert.alert('Pemberitahuan', 'Anda tidak dapat melakukan Login');
        }
      } else {
        Alert.alert('Pemberitahuan', 'Error: Semua Field Wajib diisi');
        // dispatch(setIsLoading(false));
      }
    } catch (error) {
      Alert.alert('Pemberitahuan', `${error}`);
      console.log(error, 'error');
    }
  };

  const goToRegister = () => navigation.navigate('Register');

  return (
    <ScrollView>
      <Header />
      <Forms type="Login" onPressButton={login} onPressText={goToRegister}>
        <View>
          <Input
            onChangeText={value => {
              if (dataEmail) {
                setEmail(dataEmail);
              } else {
                setEmail(value);
              }
            }}
            value={email}
            placeholder="Email"
          />
          <Input
            onChangeText={value => {
              if (dataPassword) {
                setPassword(dataPassword);
              } else {
                setPassword(value);
              }
            }}
            value={password}
            placeholder="Password"
            secureTextEntry={true}
          />
        </View>
      </Forms>
    </ScrollView>
  );
};

export default Login;
