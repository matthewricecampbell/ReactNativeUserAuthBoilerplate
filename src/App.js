import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { default as thunk } from "redux-thunk";
import { logger } from 'redux-logger';
import { Provider, connect } from 'react-redux';
import AuthReducer from './reducers/AuthReducer';
import { StackNavigator, addNavigationHelpers, NavigationActions, TabNavigator } from 'react-navigation';

import HomeScreen from './components/HomeScreen'
import LoginScreen from './components/LoginScreen'


const AppNavigator = StackNavigator({
      Login: {
        screen: LoginScreen
      },
      Home: {
        screen: HomeScreen
      }
  });


const initialNavState = AppNavigator.router.getStateForAction(NavigationActions.navigate({routeName: 'Login'}))

const NavReducer = (state = initialNavState, action) => {
  console.log("State: ", state, action)
  const newState = AppNavigator.router.getStateForAction(action, state);
  return newState || state;
};

// connect(state => ({
//     nav: state.nav
// }))

const mapStateToProps = (state) => ({
  nav: state.nav
});

const store = createStore(combineReducers({auth: AuthReducer, nav: NavReducer}), {}, applyMiddleware(thunk))

class AppNav extends Component {
  render () {

    return(
      <AppNavigator
        navigation={addNavigationHelpers({
                    dispatch: store.dispatch,
                    state: this.props.nav
                })}
      />
    );
  }
}

const AppWithNavigationState = connect(mapStateToProps)(AppNav);

export default function Moodboard() {
    console.log("HEY", store.getState())
  return(
    <Provider store={store}>
      <AppWithNavigationState />
    </Provider>
  )
}


// const Moodboard = StackNavigator({
//     Login: { screen: LoginScreen },
//     Home: { screen: HomeScreen },
// });

// export default Moodboard;
