import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import TableView from 'react-native-tableview';
import { StackNavigator } from 'react-navigation';
import SoundPlayer from 'react-native-sound-player'

//const GLOBAL = require('./Constant');


export default class SongDetail extends Component{
    static navigationOptions =
    {
        title: 'SongDetail',
        gesturesEnabled: false,
    };

    render() {
        return ( 
            <View>
            <Text> Songs Detail </Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    }
})