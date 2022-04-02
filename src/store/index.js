import {applyMiddleware, createStore} from 'redux';
import {allReducers} from './allReducers';
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const allMiddlewares = applyMiddleware(logger, ReduxThunk);
const configPersist = persistReducer(persistConfig, allReducers);

export const store = createStore(configPersist, {}, allMiddlewares);
export const Persistor = persistStore(store);
