import React, { useState, useEffect } from 'react';
import * as Permissions from 'expo-permissions';
import {Audio} from 'expo-av'
import { View, StyleSheet, TextInput, Button,PermissionsAndroid } from 'react-native';
import { WebView } from 'react-native-webview';




export default function App() {
  useEffect(() => {
    async function loadAudio() {
      const { status } = await Audio.requestPermissionsAsync();

      if (status !== 'granted') {
        Alert.alert('Oooops...', 'Precisamos de sua permissão para obter o audio');
        return;
      } 

    }

    loadAudio();
  }, []);
  return(

    <WebView
    
    originWhitelist={['*']}
    allowsInlineMediaPlayback
    
     source={{uri:'http://dese.gestaoci.com.br/?sys=shm&cli=2&seg=1'}} style={{marginTop:20}}/>
  )




}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
