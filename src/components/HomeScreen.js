import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';
export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    return (
          <View>
            <Text>Home</Text>
          </View>
    );
  }
}
