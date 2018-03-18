import React, { Component } from 'react';
import { TabNavigator, TabView } from 'react-navigation';
import HomeScreen from "../view/Home";
import AccountScreen from "../view/Account";
import activityNavigator from "../nav/ActivityNav";

const tabNav = TabNavigator({
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel:"Home",
      }
    },
    Activity: {
      screen: activityNavigator,
      navigationOptions: {
        tabBarLabel:"Activity",
      }
    },
    Account: {
      screen: AccountScreen,
      navigationOptions: {
        tabBarLabel:"Account",
      }
    },
  },
  {
    tabBarPosition: 'bottom',
  }
);

export default tabNav;
