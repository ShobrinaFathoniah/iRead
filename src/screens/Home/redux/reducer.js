import {SET_BOOKS} from './types';

const initialState = {
  data: [],
};

export const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOOKS:
      return {
        ...state,
        data: action.data,
      };

    default:
      return {
        ...state,
      };
  }
};
