import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import Root from './src/routers';
import {Provider} from 'react-redux';
import {store, Persistor} from './src/store';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={Persistor}>
        <Root />
      </PersistGate>
    </Provider>
  );
};

export default App;
