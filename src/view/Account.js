import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

export default class AccountScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Account Screen</Text>
        <Button
          title="Logout"
          onPress={() => this.props.navigation.navigate('Auth')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
