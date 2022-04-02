import {View, ScrollView, Alert} from 'react-native';
import React, {useState} from 'react';
import {Forms, Header, Input} from '../../components';
import axios from 'axios';

const Register = ({navigation}) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const dataUser = {
    email: email,
    password: password,
    name: name,
  };

  const register = async () => {
    try {
      if (email && name && password) {
        // internetChecker();

        const res = await axios.post(
          `http://code.aldipee.com/api/v1/auth/register`,
          dataUser,
        );

        console.log(res, 'res');
        console.log(res.data.success, 'res');

        const success = res.data.success;
        if (success) {
          navigation.navigate('Success Register');
        }
      } else {
        Alert.alert('Pemberitahuan', 'Error: Semua Field Wajib diisi');
        // dispatch(setIsLoading(false));
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Pemberitahuan', `${error}`);
    }
  };

  const goToLogin = () => navigation.navigate('Login');

  return (
    <ScrollView>
      <Header />
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
    </ScrollView>
  );
};

export default Register;
