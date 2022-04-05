import axios from 'axios';
import {setIsLoading} from '../../../store/globalAction';
import {SET_DATA_REGISTER} from './types';
import {Alert} from 'react-native';
import {BASE_URL} from '@env';

export const sendDataRegister =
  (dataUser, email, password, name, navigation) => async dispatch => {
    dispatch(setIsLoading(true));

    try {
      if (email && name && password) {
        const res = await axios.post(`${BASE_URL}/auth/register`, dataUser);

        console.log(res, 'res');
        console.log(res.data.success, 'res');

        const success = res.data.success;

        if (success) {
          dispatch(saveDataRegister(dataUser));
          dispatch(setIsLoading(false));

          navigation.navigate('Success Register');
        }

        if (res.status === 400) {
          Alert.alert(
            'Pemberitahuan',
            'Error: Perbaiki kembali Email dan Passwordmu!',
          );
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

export const saveDataRegister = data => {
  return {
    type: SET_DATA_REGISTER,
    email: data.email,
    password: data.password,
    name: data.name,
  };
};
