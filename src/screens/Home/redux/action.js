import axios from 'axios';
import {SET_BOOKS} from './types';
import {BASE_URL} from '@env';
import {Alert} from 'react-native';
import {setIsLoading, setRefreshing} from '../../../store/globalAction';
import {setToken} from '../../Login/redux/action';
import {navigate} from '../../../helpers/navigate';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getDataBooks = payload => async dispatch => {
  try {
    dispatch(setIsLoading(true));

    const res = await axios.get(`${BASE_URL}/books?limit=73`, {
      headers: {Authorization: `Bearer ${payload}`},
    });

    if (res.status === 200) {
      dispatch(setDataBooks(res.data.results)); //dispatch set data
      dispatch(setIsLoading(false));
      dispatch(setRefreshing(false));
    } else {
      dispatch(setIsLoading(false));
    }
    console.log(res);
  } catch (error) {
    console.log(error);
    dispatch(setIsLoading(false));
    dispatch(setRefreshing(false));

    if ((error.message = 'Request failed with status code 401')) {
      await AsyncStorage.setItem('@token', '');
      Alert.alert(
        'Pemberitahuan',
        'Token Sudah Expired, silahkan Login kembali!',
        [
          {
            text: 'OK',
            onPress: () => {
              navigate('Login');
              dispatch(setToken(''));
            },
          },
        ],
      );
    }
  }
};

export const setDataBooks = data => {
  return {
    type: SET_BOOKS,
    data: data,
  };
};
