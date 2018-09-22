import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import { StackNavigator } from 'react-navigation';

const GLOBAL = require('./Constant');




export default class Music extends Component{
    static navigationOptions =
    {
        title: 'Music',
        gesturesEnabled: false,
    };
    
    render() {
        return ( 
            <Text> Music List </Text>
        )
    }
}