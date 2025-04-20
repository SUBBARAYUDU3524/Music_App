import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './navigation/MainStack';
import colors from './config/colors';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import store from './store/store';
import {AudioProvider} from './Context/AudioContext';
import {ThemeProvider} from './Context/ThemeContext';
import {anonymousLogin} from './store/actions';

const App = () => {
  useEffect(() => {
    // Initialize anonymous login when app starts
    store.dispatch(anonymousLogin());
  }, []);
  return (
    <Provider store={store}>
      <ThemeProvider>
        <AudioProvider>
          <NavigationContainer>
            <StatusBar
              barStyle="light-content"
              backgroundColor={colors.black}
            />
            <MainStack />
          </NavigationContainer>
        </AudioProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
