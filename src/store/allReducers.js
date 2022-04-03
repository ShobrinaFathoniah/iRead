import {combineReducers} from 'redux';
import {registerReducer} from '../screens/Register/redux/reducer';
import {loginReducer} from '../screens/Login/redux/reducer';
import {homeReducer} from '../screens/Home/redux/reducer';
import {globalReducer} from './globalReducer';
import {detailReducer} from '../screens/Detail/redux/reducer';

export const allReducers = combineReducers({
  register: registerReducer,
  login: loginReducer,
  home: homeReducer,
  global: globalReducer,
  detail: detailReducer,
});
