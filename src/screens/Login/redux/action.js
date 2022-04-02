import {SET_TOKEN} from './types';

export const setToken = data => {
  return {
    type: SET_TOKEN,
    token: data,
  };
};
