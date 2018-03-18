import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SwitchNavigator, StackNavigator } from 'react-navigation';
import AuthNab from './nav/AuthNav'
import TabNav from './nav/TabNav';

const RootStack = SwitchNavigator({
  Auth: AuthNab,
  App: TabNav
},{
  mode: 'modal'
});

export default class App extends React.Component {
  render() {
    return (
      <RootStack />
    );
  }
}
