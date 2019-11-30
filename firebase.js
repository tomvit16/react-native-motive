const firebase = require("firebase");
//// Required for side-effects
require("firebase/firestore");
//// Initialize Cloud Firestore through Firebase


firebase.initializeApp({

      apiKey: "AIzaSyCV5yOWfPvHV7vGSrvYWR77rQomsWLlGTY",
      authDomain: "rn301019.firebaseapp.com",
      databaseURL: "https://rn301019.firebaseio.com",
      projectId: "rn301019",
      storageBucket: "rn301019.appspot.com",
      messagingSenderId: "656637758169",
      appId: "1:656637758169:web:a6e53f0561adba27070cc8",
      measurementId: "G-41PPJCXCEL"

    });

var db = firebase.firestore();

export {db}