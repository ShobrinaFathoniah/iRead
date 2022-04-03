import {
  SET_CONNECTION,
  SET_HEART,
  SET_LOADING,
  SET_REFRESHING,
} from './globalTypes';

export const setHeart = data => {
  return {
    type: SET_HEART,
    heart: data,
  };
};

export const setIsLoading = status => {
  return {
    type: SET_LOADING,
    status,
  };
};

export const setRefreshing = refresh => {
  return {
    type: SET_REFRESHING,
    refresh, //status: status
  };
};

export const setConnection = connection => {
  return {
    type: SET_CONNECTION,
    connection, //status: status
  };
};
