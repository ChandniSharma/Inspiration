/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Songs from  './src/Components/SongList'
import StartClass from './src/Components/StartView'
import Music from './src/Components/Music';
import ContactUs from './src/Components/ContactUs';
import { createStackNavigator } from 'react-navigation';
import SongDetail from './src/Components/SongListDetail';


const GLOBAL = require('./src/Components/Constant');


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

// For navigation 
const RootStack = createStackNavigator({
  Menu: StartClass,
    Songs: Songs,
    Music: Music,
    ContactUs: ContactUs,
    SongDetail: SongDetail
},
  {
    initialRouteName: 'Menu',
  }
);
export default class RootClass extends React.Component {
  render() {
    return <RootStack />;
  }
}