import {SET_HEART} from './globalTypes';

const initialState = {
  heart: [false],
};

export const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_HEART:
      return {
        ...state,
        heart: action.heart,
      };

    default:
      return {
        ...state,
      };
  }
};
