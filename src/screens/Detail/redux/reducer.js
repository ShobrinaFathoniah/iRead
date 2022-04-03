import SET_DETAIL from './types';

const initialState = {
  detail: {},
};

export const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DETAIL':
      return {
        ...state,
        detail: action.detail,
      };

    default:
      return {
        ...state,
      };
  }
};
