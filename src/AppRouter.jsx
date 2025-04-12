import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {MusicProvider} from './Context/MusicContext';
import App from './App';

const AppRouter = () => {
  return (
    <MusicProvider>
      <App />
    </MusicProvider>
  );
};

export default AppRouter;

const styles = StyleSheet.create({});
