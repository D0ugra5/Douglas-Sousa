import React, { Component } from 'react';
import { Text, View, StyleSheet,Button } from 'react-native';
import { WebView } from 'react-native-webview';


const onButtonPress = () => {
  console.log('foi apertado')
  
  };
export default class app extends Component {
  constructor(props) {
    super(props);
    this.state = { webViewUrl: 'http://dese.gestaoci.com.br/?sys=shc&cli=2&seg=1' };
  }
_onMessage = event => {
    console.log('_onMessage', JSON.parse(event.nativeEvent.data));
    const res = JSON.parse(event.nativeEvent.data);
    if (res.message === 'ok') {
      alert('button clicked');
    }
  };
render() {
  const jsCode = 'alert("teste")'

  
    return (
      <View style={styles.container}>


        <WebView
          ref={ref => {
            this.webview = ref;
          }}
          source={{ uri: this.state.webViewUrl }}
          originWhitelist={['*']}
            
          javaScriptEnabledAndroid={true}
          injectedJavaScript={jsCode}
          onMessage={this._onMessage}
        />
<Button
onPress={onButtonPress}
title='AperteME'
color='#841584'
accessibilityLabel='Learn more about this purple button'
/>

      </View>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});