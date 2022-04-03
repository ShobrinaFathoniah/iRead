import axios from 'axios';
import {SET_BOOKS} from './types';
import {BASE_URL} from '@env';
import {setIsLoading, setRefreshing} from '../../../store/globalAction';

export const getDataBooks = payload => async dispatch => {
  dispatch(setIsLoading(true));

  try {
    const res = await axios.get(`${BASE_URL}/books?limit=73`, {
      headers: {Authorization: `Bearer ${payload}`},
    });

    if (res.status === 200) {
      dispatch(setDataBooks(res.data.results)); //dispatch set data
      dispatch(setIsLoading(false));
      dispatch(setRefreshing(false));
    }

    dispatch(setIsLoading(false));
    dispatch(setRefreshing(false));
    console.log(res);
  } catch (error) {
    console.log(error);
    dispatch(setIsLoading(false));
    dispatch(setRefreshing(false));
  }
};

export const setDataBooks = data => {
  return {
    type: SET_BOOKS,
    data: data,
  };
};
