import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component{
  render(){
    return(
      <View styles={styles.frontscr}>
        <Text style = {{fontSize: 40, color:'black', alignItems: 'center', justifyContent:'center', paddingLeft:140, marginTop: 50}}>YHII</Text>
        <Text style= {{fontSize: 25, color:'black', fontStyle: 'italic',paddingLeft:50, marginTop: 2, textDecorationLine: 'underline'}}> Your Health Is Important</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  frontscr:{
    flex:1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent:'center'
  }
});
