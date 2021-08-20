import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/pages/Home/Market';
import Home from './src/pages/Home';

const App = () => (
  <NavigationContainer>
    <StatusBar barStyle="dark-content" />
    <Home />
  </NavigationContainer>
);

export default App;
