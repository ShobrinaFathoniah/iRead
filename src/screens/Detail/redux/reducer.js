import {SET_DETAIL, SET_SEEN_EBOOK} from './types';

const initialState = {
  detail: {},
  ebookSeen: false,
};

export const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DETAIL:
      return {
        ...state,
        detail: action.detail,
      };

    case SET_SEEN_EBOOK:
      return {
        ...state,
        ebookSeen: action.ebookSeen,
      };

    default:
      return {
        ...state,
      };
  }
};
