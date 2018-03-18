import React from 'react';
import { StyleSheet, TouchableOpacity, Button, Text, View } from 'react-native';
import Modal from 'react-native-modal';
import { TabNavigator } from 'react-navigation';

export default class HomeScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isModalVisible: false,
    }
  }

  _toggleModal() {
    this.setState({isModalVisible: !this.state.isModalVisible});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Home Screen Test!!!!</Text>
        <Modal
          isVisible={this.state.isModalVisible}
          onBackdropPress={this._toggleModal.bind(this)}
        >
          <View style={styles.modal}>
            <Text>Hello!</Text>
            <TouchableOpacity onPress={this._toggleModal.bind(this)}>
              <Text>Hide me!</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <Button
          title="Go to Profile"
          onPress={() => this.props.navigation.navigate('Profile')}
        />
        <TouchableOpacity onPress={this._toggleModal.bind(this)}>
          <Text>Show Modal</Text>
        </TouchableOpacity>
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
    paddingTop: 30,
  },
  modal: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
 },
});
