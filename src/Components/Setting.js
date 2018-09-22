import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import { createStackNavigator } from 'react-navigation';

const GLOBAL = require('./Constant');



 class SettingClass extends Component{
    static navigationOptions =
        {
            title: 'SettingClass',
        };
    constructor(props) {
        super(props);
        this.state = {

             arrayOptions:[
                {
                    index: 1,
                    title: 'Song',
                    icon: '',
                },
                {
                    index: 2,
                    title: 'Music',
                    icon: '',
                },
                {
                    index: 3,
                    title: 'Contact Us',
                    icon: '',
                },
                {
                    index: 4,
                    title: 'Rate Us',
                    icon: '',
                },
                {
                    index: 5,
                    title: 'Share',
                    icon: '',
                }
             ]
        }
    }

    renderItem(){
        return(
           this.state.arrayOptions.map(data=><Item key={data.index}>{data.title} </Item>) 
        )
    }

    render() {
        return ( 
          <View style={styles.container}>
           {/* <TableView
    style={{ flex: 1 }}
    tableViewStyle={TableView.Consts.Style.Plain}
   // onPress={({ label }) => alert(label)}
    onAccessoryPress={() => {}}
  >
    <Section>
      <Item accessoryType={DisclosureIndicator} onPress={() => this.moveToSongs()}>
      Songs</Item>
      <Item accessoryType={DisclosureIndicator} onPress={() => this.moveToMusic()}>
      Music
      </Item>
      <Item accessoryType={DisclosureButton} onPress={() => this.moveToContactUs()}>
       Contact Us 
       </Item>
      <Item accessoryType={DisclosureButton} onPress={() => this.moveToRateUs()}>
      Rate Us
      </Item>
      <Item accessoryType={DetailButton} onPress={() => this.shareTheApp()}>
       Share the app 
      </Item>
      </Section>
    </TableView> */}
          </View>
        );
      }

      moveToSongs(){
        this.props.navigation.navigate(GLOBAL.Songs);

      }
      moveToMusic(){

       }
        moveToContactUs(){

        }
        moveToRateUs(){

        }
        shareTheApp(){

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