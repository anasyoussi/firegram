import * as firebase from 'firebase/app';
import 'firebase/storage' ;
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBfxf93S9JxxxaabPePMdx9jHmVs3vNX_8",
    authDomain: "firegram-b0ca1.firebaseapp.com",
    projectId: "firegram-b0ca1",
    storageBucket: "firegram-b0ca1.appspot.com",
    messagingSenderId: "614541548809",
    appId: "1:614541548809:web:135f94f9656982bae487d8"
};
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();