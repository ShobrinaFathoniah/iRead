import SET_DETAIL from './types';

const initialState = {
  data: {},
};

export const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DETAIL:
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
