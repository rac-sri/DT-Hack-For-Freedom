/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Geolocation from './src/geolocation/geolocation';
import magic from './src/magic';
import Avatar from './src/avatar/avatar';
import Navigator from './routes/homeStack';
import Homepage from './src/homepage/homepage';
declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Navigator />
    </>
  );
};

export default App;
