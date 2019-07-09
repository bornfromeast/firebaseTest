import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDB8Al8zXZ5bwVDM269RE5A9wdN3UzV6AY",
  authDomain: "btn1-191b6.firebaseapp.com",
  databaseURL: "https://btn1-191b6.firebaseio.com",
  projectId: "btn1-191b6",
  storageBucket: "btn1-191b6.appspot.com",
  messagingSenderId: "1060279999693",
  appId: "1:1060279999693:web:bfad3b884c41f776"
};

firebase.initializeApp(firebaseConfig);

export default  firebase;

