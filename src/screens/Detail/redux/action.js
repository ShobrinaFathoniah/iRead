import {SET_DETAIL, SET_SEEN_EBOOK} from './types';
import {BASE_URL} from '@env';
import {setIsLoading, setRefreshing} from '../../../store/globalAction';
import axios from 'axios';

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
