import {SET_DETAIL} from './types';
import {BASE_URL} from '@env';
import {setIsLoading, setRefreshing} from '../../../store/globalAction';
import axios from 'axios';

export const getDataDetail = (dataToken, idBook) => async dispatch => {
  // dispatch(setIsLoading(true));

  try {
    const res = await axios.get(`${BASE_URL}/books/${idBook}`, {
      headers: {Authorization: `Bearer ${dataToken}`},
    });

    console.log(res, 'res');

    // if (res.status === 200) {
    console.log(res.data, 'res');

    dispatch(setDetailData(res.data));

    // dispatch(setIsLoading(false));
    // dispatch(setRefreshing(false));
    // }
  } catch (error) {
    console.log(error);
    // dispatch(setIsLoading(false));
    // dispatch(setRefreshing(false));
  }
};

export const setDetailData = data => {
  return {
    type: SET_DETAIL,
    detail: data,
  };
};
