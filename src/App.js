import React, { Component } from 'react';
import { View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { default as thunk } from "redux-thunk";
import { logger } from 'redux-logger';
import { Provider } from 'react-redux';
import Reducers from './reducers/';
import LoginForm from './components/LoginForm';

class App extends Component {
  render() {
    return (
      <Provider store={createStore(Reducers, {}, applyMiddleware(thunk))}>
        <View>
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

export default App;
