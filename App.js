import React, {Component} from 'react';

import { createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import store from './src/store';

import Home from './src/pages/Home';
import Demo from './src/pages/Demo';

const Router = createStackNavigator({
  Home: {
    screen: Home
  },
  Demo: {
    screen: Demo
  }
},
{
  initialRouteName: 'Home',
});


export default class App extends Component {
  render(){
    return <Provider store={store}>
      <Router/>
    </Provider>
  }
}
