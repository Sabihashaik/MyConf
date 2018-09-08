import * as React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import {createStackNavigator} from 'react-navigation';
import Day1 from './src/Day1'
import Landing from './src/Landing'

export default class App extends React.Component {
  render() {
    return (
     <AppStackNavigator/>
    );
  }
}
const AppStackNavigator = createStackNavigator({
landing:Landing,
Day1: Day1
})

