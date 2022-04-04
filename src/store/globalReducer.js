import {
  SET_CONNECTION,
  SET_HEART,
  SET_LOADING,
  SET_REFRESHING,
} from './globalTypes';

const initialState = {
  heart: false,
  idBook: '',
  isLoading: false,
  connection: true,
  refreshing: false,
};

export const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_HEART:
      return {
        ...state,
        heart: action.heart,
        idBook: action.idBook,
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.status,
      };

    case SET_REFRESHING:
      return {
        ...state,
        refreshing: action.refresh,
      };

    case SET_CONNECTION:
      return {
        ...state,
        connection: action.connection,
      };

    default:
      return {
        ...state,
      };
  }
};
