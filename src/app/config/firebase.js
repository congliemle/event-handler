import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBuP7tjq-7eR3iJcZMi4mu7_UQrhgt6Zbw",
    authDomain: "event-handler-1899b.firebaseapp.com",
    databaseURL: "https://event-handler-1899b.firebaseio.com",
    projectId: "event-handler-1899b",
    storageBucket: "event-handler-1899b.appspot.com",
    messagingSenderId: "254738195565"
}

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;