import {View, ScrollView, Alert} from 'react-native';
import React, {useState} from 'react';
import {Forms, Header, Input, LoadingBar, NoConnection} from '../../components';
import {BASE_URL} from '@env';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {setToken} from './redux/action';
import {setIsLoading} from '../../store/globalAction';

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

  if (dataToken) {
    navigation.navigate('Home');
  }

  const login = async () => {
    dispatch(setIsLoading(true));

    try {
      if (email && password) {
        const res = await axios.post(`${BASE_URL}/auth/login`, dataUser);

        console.log(res, 'res');
        console.log(res.data.tokens.access.token);

        const token = res.data.tokens.access.token;
        if (token) {
          dispatch(setToken(token));
          navigation.navigate('Home');

          dispatch(setIsLoading(false));
        } else {
          Alert.alert('Pemberitahuan', 'Anda tidak dapat melakukan Login');
          dispatch(setIsLoading(false));
        }
      } else {
        Alert.alert('Pemberitahuan', 'Error: Semua Field Wajib diisi');
        dispatch(setIsLoading(false));
      }
    } catch (error) {
      Alert.alert('Pemberitahuan', `${error}`);
      console.log(error, 'error');
      dispatch(setIsLoading(false));
    }
  };

  const goToRegister = () => navigation.navigate('Register');

  const loginScreen = () => {
    return (
      <View>
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
