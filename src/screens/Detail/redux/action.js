import {Alert} from 'react-native';
import {SET_DETAIL, SET_SEEN_EBOOK} from './types';
import {BASE_URL} from '@env';
import {setIsLoading, setRefreshing} from '../../../store/globalAction';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {navigate} from '../../../helpers/navigate';
import {setToken} from '../../Login/redux/action';

export const getDataDetail = (dataToken, idBook) => async dispatch => {
  try {
    dispatch(setIsLoading(true));
    const res = await axios.get(`${BASE_URL}/books/${idBook}`, {
      headers: {Authorization: `Bearer ${dataToken}`},
    });

    console.log(res, 'res');
    console.log(res.data, 'res');

    dispatch(setDetailData(res.data));

    dispatch(setIsLoading(false));
    dispatch(setRefreshing(false));
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

export const setDetailData = data => {
  return {
    type: SET_DETAIL,
    detail: data,
  };
};

export const setEbookSeen = data => {
  return {
    type: SET_SEEN_EBOOK,
    ebookSeen: data,
  };
};
