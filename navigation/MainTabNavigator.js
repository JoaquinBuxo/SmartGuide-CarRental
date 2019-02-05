import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import CarsScreen from '../screens/CarsScreen';
import CustomersScreen from '../screens/CustomersScreen';
import RentalsScreen from '../screens/RentalsScreen';

const CarsStack = createStackNavigator({
  Cars: CarsScreen,
});

CarsStack.navigationOptions = {
  tabBarLabel: 'Cars',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={ Platform.OS === 'ios' ? "ios-car" : 'md-car'}
    />
  ),
};

const CustomersStack = createStackNavigator({
  Customers: CustomersScreen,
});

CustomersStack.navigationOptions = {
  tabBarLabel: 'Customers',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-contact' : 'md-contact'}
    />
  ),
};

const RentalsStack = createStackNavigator({
  Rentals: RentalsScreen,
});

RentalsStack.navigationOptions = {
  tabBarLabel: 'Rental',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-key' : 'md-key'}
    />
  ),
};

export default createBottomTabNavigator({
  CarsStack,
  CustomersStack,
  RentalsStack,
});
