import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';
import LoginForm from '../components/LoginForm';
import { NavigationActions } from 'react-navigation'
export default class LoginScreen extends Component {
    render() {
      return (
          <View>
            <LoginForm {...this.props} />
          </View>
      );
    }
}