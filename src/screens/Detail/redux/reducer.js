import SET_DETAIL from './types';

const initialState = {
  dataDetail: {},
};

export const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DETAIL:
      return {
        ...state,
        dataDetail: action.detail,
      };

    default:
      return {
        ...state,
      };
  }
};
