import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, ActivityIndicator} from 'react-native';
import firebase from "./src/Firebase";

type Props = {};
export default class App extends Component<Props> {
  constructor() {
    super();
    this.state = {
      updated: false,
      number: null,
      updating: true,
      dd: false
    }
  }
  componentDidMount(){
    if(!this.state.updated){
      this.getNumber();
    }
    let db =  firebase.firestore();
    let x = db.collection("counters").doc("TA5xKC83fiPiGTWPV62e");

    let observer = x.onSnapshot(docSnapshot => {
      this.setState((oldState)=>{
        return {...oldState,  number: docSnapshot.data().counter, }
      })
    }, err => {
      console.log(`Encountered error: ${err}`);
    });
  }


  getNumber () {
    console.log(123)
    let db =  firebase.firestore();
    let x = db.collection("counters").doc("TA5xKC83fiPiGTWPV62e");
    let docx = x.get().then((data) => {
      this.setState((oldState)=>{
        return {...oldState, updating:false, number:data.data().counter, updated:true}
      })
    }).catch((e)=>{console.log(e)});
  }

  _onPressButton = () => {
    this.setState(function (sd) {
      return {...sd, dd:true}
    }, ()=>{
      let db =  firebase.firestore();
      let x = db.collection("counters").doc("TA5xKC83fiPiGTWPV62e");
      let ss = function(oldState){
        return {...oldState, number:oldState.number+1}
      }
      let fun = function(){
        x.update({
          counter:this.state.number
        }).then(()=>{

          console.log("update themn")
          this.setState(function (sd) {
            console.log("final set state")
            return {...sd, dd:false}
          })
        });
      }

      this.setState(ss, fun)

    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Количество кликов</Text>
        {this.state.updating?

          <ActivityIndicator></ActivityIndicator>
          :
          <Text style={styles.instructions}>{this.state.number}</Text>
        }
        <TouchableOpacity style={styles.btn} onPress={this._onPressButton} disabled={this.state.dd}>
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
