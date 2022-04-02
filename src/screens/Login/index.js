import {View, ScrollView, Alert} from 'react-native';
import React, {useState} from 'react';
import {Forms, Header, Input, LoadingBar} from '../../components';
import {BASE_URL} from '@env';
import axios from 'axios';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dataUser = {
    email: email,
    password: password,
  };

  const login = async () => {
    try {
      if (email && password) {
        // internetChecker();

        const res = await axios.post(
          `http://code.aldipee.com/api/v1/auth/login`,
          dataUser,
        );

        console.log(res, 'res');
        console.log(res.data.tokens.access.token);

        const token = res.data.tokens.access.token;
        if (token) {
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
    </ScrollView>
  );
};

export default Login;
