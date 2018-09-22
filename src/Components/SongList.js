import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, ScrollView, Button} from 'react-native';
import TableView from 'react-native-tableview';
import { StackNavigator } from 'react-navigation';
import SoundPlayer from 'react-native-sound-player';
import SongDetail from './SongListDetail'

//const GLOBAL = require('./Constant');


export default class Songs extends Component{
    static navigationOptions =
    {
        title: 'Songs',
        gesturesEnabled: false,
    };

    render() {
        return ( 
            <Button
                onPress={() => {
                    this.moveToDetailView();
                }}
                title="Press Me"
                />
        )
    }
    moveToDetailView(){
        console.log('Move to Detail view ')
        this.props.navigation.navigate('SongDetail');
    }
}
