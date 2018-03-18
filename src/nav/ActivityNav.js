import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation'
import ActivityScreen from "../view/Activity"
import ActivityDetailScreen from "../view/ActivityDetail"

const activityNavigator = StackNavigator ({
  Activity: {
    screen: ActivityScreen,
    headerMode: 'none',
  },
  ActivityDetail: {
    screen: ActivityDetailScreen,
    headerMode: 'none',
  }
});

export default activityNavigator;
