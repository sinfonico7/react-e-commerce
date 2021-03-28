import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDTLvFcShOXq4K_AeEQOEHZoLqK_g8blLI",
    authDomain: "crwn-db-finostroza.firebaseapp.com",
    projectId: "crwn-db-finostroza",
    storageBucket: "crwn-db-finostroza.appspot.com",
    messagingSenderId: "633916802100",
    appId: "1:633916802100:web:8ed68c66732092c6bbf661",
    measurementId: "G-RL7ZKYY6Y1"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt : 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;