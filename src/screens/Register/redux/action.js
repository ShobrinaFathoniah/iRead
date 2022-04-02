import {SET_DATA_REGISTER} from './types';

export const setDataRegister = data => {
  return {
    type: SET_DATA_REGISTER,
    email: data.email,
    password: data.password,
    name: data.name,
  };
};
