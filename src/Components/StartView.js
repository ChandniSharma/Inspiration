import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, ScrollView, Share} from 'react-native';


import {
    Cell, 
    Section,
    TableView,
  } from 'react-native-tableview-simple';
  
  
export default class StartClass extends Component{

  static navigationOptions =
  {
      title: 'Menu',
  };
constructor(props) {
  super(props);
  this.state = {

       arrayOptions:[
          {
              index: 1,
              title: 'Songs',
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
render(){
    return(
        <ScrollView contentContainerStyle={styles.stage}>
        <TableView>
          <Section header="STANDARD">
          <Cell cellStyle="Basic" title="Songs "
            accessory="DisclosureIndicator"
            onPress={() => this.moveToSongs()}
            />
            <Cell cellStyle="Basic" title="Music"
            accessory="DisclosureIndicator"
            onPress={() => this.moveToMusic()}
            />
            <Cell cellStyle="Basic" title="Contact Us"
            accessory="DisclosureIndicator"
            onPress={() => this.moveToContactUs()}
            />
            <Cell cellStyle="Basic" title="Share"
            accessory="DisclosureIndicator"
            onPress={() => this.shareApp()}
            />
            <Cell cellStyle="Basic" title="Rate Us"
            accessory="DisclosureIndicator"
            onPress={() => this.rateUs()}
            />
          </Section>
       </TableView>
       </ScrollView>
    );
}

shareApp(){
  Share.share(shareOptions);
}
rateUs(){
// Move to app store 
}

moveToSongs(index){
    // console.log('index is - ',index);
     this.props.navigation.navigate('Songs');

  }
  moveToMusic(index){
    // console.log('index is - ',index);
     this.props.navigation.navigate('Music');

  }
  moveToContactUs(index){
    // console.log('index is - ',index);
     this.props.navigation.navigate('ContactUs');

  }
   
}

const shareOptions = {
  title: 'Inspiration App',
  message: 'This is the awesome app, Please download it.', // Note that according to the documentation at least one of "message" or "url" fields is required
  url: 'www.example.com', // Replace with actual app url.
  subject: 'InspirationApp'
};

const styles = StyleSheet.create({
  stage: {
    backgroundColor: '#EFEFF4',
    paddingTop: 20,
    paddingBottom: 20,
  },
  container: {
   flex: 1,
   paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
})
