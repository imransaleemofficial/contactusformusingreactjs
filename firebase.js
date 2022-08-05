import firebase from 'firebase/app';
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAsb-SU48T5rffjyNpljsR3MT7UcOJxJrc",
  authDomain: "contactus-b8303.firebaseapp.com",
  projectId: "contactus-b8303",
  storageBucket: "contactus-b8303.appspot.com",
  messagingSenderId: "826990178712",
  appId: "1:826990178712:web:1ea2e2e347e5ab126c3bed"
};

const fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();
