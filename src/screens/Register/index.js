import {View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {Forms, Header, Input, LoadingBar, NoConnection} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {sendDataRegister} from './redux/action';

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

  const register = () => {
    dispatch(sendDataRegister(dataUser, email, password, name, navigation));
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
