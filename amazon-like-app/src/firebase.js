import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBGViNfpP6bpYAep_qJ0V4tlrxx01QxrVI",
  authDomain: "like-app-94bda.firebaseapp.com",
  databaseURL: "https://like-app-94bda.firebaseio.com",
  projectId: "like-app-94bda",
  storageBucket: "like-app-94bda.appspot.com",
  messagingSenderId: "907861882230",
  appId: "1:907861882230:web:585b2415ae1b49a6dd3657",
  measurementId: "G-0KVQ14R02Y"
});


const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };