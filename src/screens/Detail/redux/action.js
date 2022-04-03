import {SET_DETAIL} from './types';

// const {dataToken} = useSelector(state => state.login);

export const setDetailData = data => {
  return {
    type: SET_DETAIL,
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
