/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDB8Al8zXZ5bwVDM269RE5A9wdN3UzV6AY",
  authDomain: "btn1-191b6.firebaseapp.com",
  databaseURL: "https://btn1-191b6.firebaseio.com",
  projectId: "btn1-191b6",
  storageBucket: "",
  messagingSenderId: "1060279999693",
  appId: "1:1060279999693:web:bfad3b884c41f776"
};
// Initialize Firebase
let db = firebase.initializeApp(firebaseConfig);



const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Количество кликов</Text>
        <Text style={styles.instructions}>0</Text>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.inBtn}>Добавить</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    fontSize: 40,
  },
  inBtn: {
    textAlign: 'center',
    color: '#999',
  },
  btn: {
    backgroundColor: "black",
    padding: 15,
    borderRadius: 5,
  },
});
