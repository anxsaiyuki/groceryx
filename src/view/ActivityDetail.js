import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

export default class ActivityDetailScreen extends React.Component {
  render() {
    const { params } = this.props.navigation.state;
    const activityId = params ? params.activityId : null;

    console.log(activityId)
    return (
      <View style={styles.container}>
        <Text>Activity Detail Screen for activityId: {activityId}</Text>
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
