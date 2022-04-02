import axios from 'axios';
import {SET_BOOKS} from './types';
import {BASE_URL} from '@env';
import {useSelector} from 'react-redux';

// const {dataToken} = useSelector(state => state.login);

export const setDataBooks = data => {
  return {
    type: SET_BOOKS,
    data: data,
  };
};

// export const getDataBooks = () => {
//   return async dispatch => {
//     const res = await axios.get(`${BASE_URL}/books`, {
//       headers: {Authorization: `Bearer ${dataToken}`},
//     });
//     if (res.data.results.length > 0) {
//       dispatch(setDataBooks(res.data.results));
//     }
//   };
// };
