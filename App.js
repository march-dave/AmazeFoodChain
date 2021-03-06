/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  View
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import SHA256 from 'crypto-js/sha256';
import api from './src/api';

type Props = {};
export default class App extends Component<Props> {

  state = {
    info: ''
  }

  async componentDidMount() {
    const deals = await api.fetchInitialDeals();
    // const deals = await api.fetchInitialChangePoint();
    console.log('deals:-----' + deals);
    
      // fetch('https://facebook.github.io/react-native/movies.json')
      // .then((response) => response.json() )
      // .then((responseJson) => {
      //   console.log(responseJson.movies)
      //   console.log('com: ' +  SHA256(responseJson.movies)  )
      // })
      // .catch((error) =>{
      //   console.error(error);
      // });
  }

  onSuccess(e) {
    this.setState( {info: e.data} ) 
    // Linking
    //   .openURL(e.data)
    //   .catch(err => console.error('An error occured', err));
    // runIt();
  }

  render() {
    return (
      <QRCodeScanner
        onRead={this.onSuccess.bind(this)}
        topContent={
          <Text style={styles.centerText}>
            {/* Go to <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on your computer and scan the QR code. */}
          </Text>
        }
        // bottomContent={
        //   <TouchableOpacity style={styles.buttonTouchable}>
        //     <Text style={styles.buttonText}>OK. Got it!</Text>
        //   </TouchableOpacity>
        // }

        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>{this.state.info}</Text>
          </TouchableOpacity>
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});