import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './home.routes';
import Product from '../pages/Product';
import Cart from '../pages/Cart';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#fff' },
    }}
    initialRouteName="Home"
  >
    <App.Screen name="Home" component={Home} />
    <App.Screen name="Product" component={Product} />
    <App.Screen name="Cart" component={Cart} />
  </App.Navigator>
);

export default AppRoutes;
