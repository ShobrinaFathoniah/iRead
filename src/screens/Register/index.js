import {View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {
  Forms,
  Header,
  Input,
  LibreBaskerville,
  LoadingBar,
  NoConnection,
} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {sendDataRegister} from './redux/action';
import {checkEmail, isValidPassword} from '../../helpers/validationData';
import styles from './style';

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

  // console.log(email);
  const emailChecker = email => {
    if (!checkEmail(email) && email.length > 0) {
      return (
        <LibreBaskerville style={styles.erorText}>
          Email yang Anda masukan Tidak Valid
        </LibreBaskerville>
      );
    }
  };

  console.log(password);
  const passwordChecker = password => {
    if (!isValidPassword(password) && password.length > 0) {
      return (
        <LibreBaskerville style={[styles.erorText, styles.passwordError]}>
          Password Harus Lebih dari 8 dan Terdapat Angka
        </LibreBaskerville>
      );
    }
  };

  const goToLogin = () => navigation.navigate('Login');

  const registerScreen = () => {
    return (
      <View>
        <Forms type="Register" onPressButton={register} onPressText={goToLogin}>
          <View>
            {emailChecker(email)}
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
            {passwordChecker(password)}
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
      <Header radiusBottom={true} />
      {connection ? registerScreen() : NoConnection(connection)}
    </ScrollView>
  );
};

export default Register;
