import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Card, FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      authError: false,
      loading: false,
    }
  }

  _login() {
    let username = this.state.username;
    let password = this.state.password;
    this.setState({
      loading: true,
    }, () => {
      setTimeout(() => { this.props.navigation.navigate('App'); }, 3000);
    })
  }

  _onInputChange() {

  }

  _signup() {
    this.props.navigation.navigate('Signup')
  }

  render() {
    return (
      <View style={styles.container}>
        <Card>
          <Text style={styles.header}>Anxsaiyuki</Text>
        </Card>
        <Card title="Login">
          { this.state.authError ? <FormValidationMessage>Username or password are not correct</FormValidationMessage> : null }
          <FormLabel>Username</FormLabel>
          <FormInput
            underlineColorAndroid="#A9A9A9"
            placeholder="Username..."
            onChangeText={this._onInputChange.bind(this, "Test")}
          />
          <FormLabel>Password</FormLabel>
          <FormInput underlineColorAndroid="#A9A9A9" secureTextEntry placeholder="Password..." />
          <Button
            buttonStyle={{ marginTop: 20 }}
            backgroundColor="#03A9F4"
            title="LOGIN"
            onPress={this._login.bind(this)}
          />
          <TouchableOpacity onPress={this._signup.bind(this)}>
            <Text style={styles.signup}>Register</Text>
          </TouchableOpacity>
        </Card>
        <Modal
          animationType="none"
          transparent={true}
          visible={this.state.loading}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}
        >
          <View style={styles.loading}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        </Modal>
      </View>
      // <View style={styles.container}>
      //     <Text style={styles.header}>Login</Text>
      //     {this.state.error ? (
      //       <Text style={styles.error}>
      //         User name or password do are not correct
      //       </Text>
      //     ) : null}
      //     <Text style={styles.label}>User Name</Text>
      //     <TextInput
      //       style={styles.inputBox}
      //       underlineColorAndroid = "transparent"
      //       onChangeText={(text) => this.setState({username: text})}
      //     />
      //     <Text style={styles.label}>Password</Text>
      //     <Modal
      //       animationType="none"
      //       transparent={true}
      //       visible={this.state.loading}
      //       onRequestClose={() => {
      //         alert('Modal has been closed.');
      //       }}
      //     >
      //       <View style={styles.loading}>
      //         <ActivityIndicator size="large" color="#0000ff" />
      //       </View>
      //     </Modal>
      //     <TextInput
      //       secureTextEntry={true}
      //       underlineColorAndroid = "transparent"
      //       style={styles.inputBox}
      //       onChangeText={(text) => this.setState({password: text})}
      //     />
      //     <Button
      //       title="Login"
      //       onPress={this._login.bind(this)}
      //     />
      //     <TouchableOpacity onPress={this._signup.bind(this)}>
      //       <Text style={styles.signup}>Register</Text>
      //     </TouchableOpacity>
      // </View>
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
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100
  },
  loadingModal: {
    position: 'absolute',
    backgroundColor: 'rgba(255,255,255,0.5)'
  },
  signup: {
    paddingTop: 20,
    textAlign: 'center',
    fontSize: 18,
  }
});
