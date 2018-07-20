import Home from './src/pages/Home';
import Demo from './src/pages/Demo';
import { createStackNavigator } from 'react-navigation';

export default createStackNavigator({
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
