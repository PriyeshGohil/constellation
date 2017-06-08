import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyDZM7hNjLcmr7LqWowkVtsHYgR1aBBTslk",
    authDomain: "constellation-20b82.firebaseapp.com",
    databaseURL: "https://constellation-20b82.firebaseio.com",
    projectId: "constellation-20b82",
    storageBucket: "constellation-20b82.appspot.com",
    messagingSenderId: "513848333703"
  };

firebase.initializeApp(config);

export const db = firebase.database();