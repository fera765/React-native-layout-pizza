import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Pizza from '../pages/Pizza';
import Esfira from '../pages/Esfira';
import Lanche from '../pages/Lanche';

const Tab = createMaterialTopTabNavigator();

const HomeRoutes: React.FC = () => (
  <Tab.Navigator
    swipeEnabled={false}
    tabBarOptions={{
      activeTintColor: '#000',
      inactiveTintColor: '#888',
      indicatorStyle: {
        backgroundColor: '#FA5858',
      },
      labelStyle: {
        fontSize: 16,
        fontWeight: '700',
      },
      tabStyle: {
        borderStartWidth: 1,
        borderStartColor: '#d7d7d7',
        height: 60,
      },
    }}
  >
    <Tab.Screen name="PIZZAS" component={Pizza} />
    <Tab.Screen name="ESFIRAS" component={Esfira} />
    <Tab.Screen name="LANCHES" component={Lanche} />
  </Tab.Navigator>
);

export default HomeRoutes;
