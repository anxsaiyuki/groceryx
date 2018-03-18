import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation'
import LoginScreen from "../view/Login"
import SignupScreen from "../view/Signup"

const authNavigator = StackNavigator ({
  Login: {
    screen: LoginScreen,
    headerMode: 'none',
  },
  Signup: {
    screen: SignupScreen,
    headerMode: 'none',
  }
});

export default authNavigator;
