/** @format */

import App from './App';
import {name as appName} from './app.json';
import RootClass from './App';
import StartClass from './src/Components/StartView';
import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, TouchableHighlight, View, Share, TouchableOpacity} from 'react-native';

const shareOptions = {
    title: 'Title',
    message: 'Message to share', // Note that according to the documentation at least one of "message" or "url" fields is required
    url: 'www.example.com',
    subject: 'Subject'
  };
  
   class ShareExample extends React.Component {
  
    onSharePress = () => Share.share(shareOptions);
  
    render(){
      return(
        <View style={styles.container}>
            <TouchableOpacity onPress={this.onSharePress} >
            <Text>Share data</Text>
            </TouchableOpacity>
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    stage: {
      backgroundColor: '#EFEFF4',
      paddingTop: 20,
      paddingBottom: 20,
    },
  
    container: {
     flex: 1,
     paddingTop: 22
    }
})
AppRegistry.registerComponent(appName, () => RootClass);

