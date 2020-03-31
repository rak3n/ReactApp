import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBB1KyzG1301F7umWYM8difyHVheE-T01k",
    authDomain: "tasker-f5a6e.firebaseapp.com",
    databaseURL: "https://tasker-f5a6e.firebaseio.com",
    projectId: "tasker-f5a6e",
    storageBucket: "tasker-f5a6e.appspot.com",
    messagingSenderId: "4112605247",
    appId: "1:4112605247:web:6d003b251c2142b195988a",
    measurementId: "G-Z3NCDC8QKX"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;