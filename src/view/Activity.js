import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import { List, ListItem } from 'react-native-elements'

export default class ActivityScreen extends React.Component {

  _goToDetail(id) {
    this.props.navigation.navigate('ActivityDetail', {
      activityId: id,
    })
  }

  render() {
    const list = [
      {
        id: '1',
        name: 'Andrew',
        subtitle: 'Walgreens List',
        date: '03/18/18 14:00'
      },
      {
        id: '2',
        name: 'Steven',
        subtitle: 'Bed Bath & Beyond List',
        date: '03/18/18 17:00'
      },
    ]

    const listComponent = list.map((item, idx) => {
      return (
        <ListItem
          key={idx}
          title={item.name}
          subtitle={
            <View style={styles.subtitleView}>
              <Text>{item.subtitle}</Text>
              <Text>Date: {item.date}</Text>
            </View>
          }
          onPress={this._goToDetail.bind(this, item.id)}
        />
      )
    })
    return (
      <View>
        <List>
          {listComponent}
        </List>
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
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5
  }
});
