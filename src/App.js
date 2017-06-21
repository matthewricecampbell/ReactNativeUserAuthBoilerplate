import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { default as thunk } from "redux-thunk";
import { logger } from 'redux-logger';
import { Provider } from 'react-redux';
import Reducers from './reducers/';
import LoginForm from './components/LoginForm';
import { StackNavigator } from 'react-navigation';

class LoginScreen extends Component {
    render() {
      const { navigate } = this.props.navigation;
      return (
        <Provider store={createStore(Reducers, {}, applyMiddleware(thunk))}>
          <View>
            <LoginForm />
          </View>
        </Provider>
      );
    }
}

class HomeScreen extends Component {
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

const Moodboard = StackNavigator({
    Login: { screen: LoginScreen },
    Home: { screen: HomeScreen },
});

export default Moodboard;
