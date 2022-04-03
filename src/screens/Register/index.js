import {View, ScrollView, Alert} from 'react-native';
import React, {useState} from 'react';
import {Forms, Header, Input, LoadingBar, NoConnection} from '../../components';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {setDataRegister} from './redux/action';
import {BASE_URL} from '@env';
import {setIsLoading} from '../../store/globalAction';

const Register = ({navigation}) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const {isLoading, connection} = useSelector(state => state.global);

  const dispatch = useDispatch();

  const dataUser = {
    email: email,
    password: password,
    name: name,
  };

  const register = async () => {
    dispatch(setIsLoading(true));

    try {
      if (email && name && password) {
        const res = await axios.post(`${BASE_URL}/auth/register`, dataUser);

        console.log(res, 'res');
        console.log(res.data.success, 'res');

        const success = res.data.success;
        if (success) {
          dispatch(setDataRegister(dataUser));
          navigation.navigate('Success Register');
          dispatch(setIsLoading(false));
        }
      } else {
        Alert.alert('Pemberitahuan', 'Error: Semua Field Wajib diisi');
        dispatch(setIsLoading(false));
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Pemberitahuan', `${error}`);
      dispatch(setIsLoading(false));
    }
  };

  const goToLogin = () => navigation.navigate('Login');

  const registerScreen = () => {
    return (
      <View>
        <Forms type="Register" onPressButton={register} onPressText={goToLogin}>
          <View>
            <Input
              onChangeText={value => setEmail(value)}
              value={email}
              placeholder="Email"
            />
            <Input
              onChangeText={value => setName(value)}
              value={name}
              placeholder="Name"
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
      {connection ? registerScreen() : NoConnection(connection)}
    </ScrollView>
  );
};

export default Register;
