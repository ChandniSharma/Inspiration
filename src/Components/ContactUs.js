import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import { StackNavigator } from 'react-navigation';
const GLOBAL = require('./Constant');



export default class ContactUs extends Component{
    static navigationOptions =
    {
        title: 'ContactUs',
        gesturesEnabled: false,
    };
    
    render() {
        return (
            <View style={styles.container}>
            <Text> Application Name </Text>
            <Text> Inspiration</Text>
            <Text>Version 1.0 </Text>
            <Text>Chandni Sharma </Text>
            <Text>chaandni.sharmaa@gmail.com </Text>
           </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
       
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
})