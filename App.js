import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import Root from './src/routers';
import {Provider} from 'react-redux';
import {store, persistedStore} from './src/store';
// import {PersistGate} from 'redux-persist/lib/integration/react';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      {/* <PersistGate persistor={persistedStore}> */}
      <Root />
      {/* </PersistGate> */}
    </Provider>
  );
};

export default App;
