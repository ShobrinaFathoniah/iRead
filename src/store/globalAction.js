import {SET_HEART} from './globalTypes';

export const setHeart = data => {
  return {
    type: SET_HEART,
    heart: data,
  };
};
