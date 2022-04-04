import {applyMiddleware, createStore} from 'redux';
import {allReducers} from './allReducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';

const persistConfig = {
  key: 'token', //bebas
  storage: AsyncStorage,
  whitelist: ['login'],
  timeout: null,
};

const allMiddlewares = applyMiddleware(logger, thunk);
const persistedReducer = persistReducer(persistConfig, allReducers);

export const store = createStore(allReducers, {}, allMiddlewares);
// export const persistedStore = persistStore(store);

//asyncstorage -> ga perlu link
//redux-persist

//buka store
//import persist => persistReducer, persistStore
//blacklist/whitelist: ["",""] di config persist
