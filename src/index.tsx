import 'react-native-gesture-handler';
import React from 'react';
import { View, StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';

import Header from './components/Header';

const App: React.FC = () => (
  <View style={{ flex: 1, backgroundColor: '#fff' }}>
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#312e38" />
      <Header />
      <Routes />
    </NavigationContainer>
  </View>
);

export default App;
