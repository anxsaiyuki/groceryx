import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Card, FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';
import { getRequest } from '../util/request';

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userNameError: false,
      passwordError: false,
      username: '',
      password: '',
      confirmPassword: '',
    }
  }

  _onInputChange(text, key) {
    const { password, confirmPassword } = this.state;
    var stateObj = { [key]: text }
    if (key === 'confirmPassword') {
      if (password !== text) {
        stateObj.passwordError = true;
      } else {
        stateObj.passwordError = false;
      }
    }
    this.setState(stateObj);
  }

  _signup() {
    const { username, password, confirmPassword } = this.state;
    // getRequest('user/signup', (err, data) => {
    //   console.log(data.success);
    // })
    //check password
  }

  render() {
    const {userNameError, passwordError} = this.state;
    return (
      <View style={styles.container}>
        <Card title="Register">
          <FormLabel>Username</FormLabel>
          <FormInput
            underlineColorAndroid="#A9A9A9"
            placeholder="Username..."
            onChangeText={(text) => this._onInputChange.call(this, text, "username")}
          />
          { userNameError ? <FormValidationMessage>Username already exists</FormValidationMessage> : null }
          <FormLabel>Password</FormLabel>
          <FormInput
            underlineColorAndroid="#A9A9A9"
            secureTextEntry placeholder="Password..."
            onChangeText={(text) => this._onInputChange.call(this, text, "password")}
          />
          <FormLabel>Confirm Password</FormLabel>
          <FormInput
            underlineColorAndroid="#A9A9A9"
            secureTextEntry placeholder="Confirm Password..."
            onChangeText={(text) => this._onInputChange.call(this, text, "confirmPassword")}
          />
          { passwordError ? <FormValidationMessage>Passwords must match</FormValidationMessage> : null }
          <Button
            buttonStyle={{ marginTop: 20 }}
            backgroundColor="#03A9F4"
            title="SIGN UP"
            onPress={this._signup.bind(this)}
          />
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingBottom: 25,
    textAlign: 'center',
  },
});
