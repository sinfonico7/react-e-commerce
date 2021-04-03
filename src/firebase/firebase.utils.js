import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {

    apiKey: "AIzaSyB3z0ULGbww9yQLTqGTLAt6_blp6zDwGN0",
    authDomain: "just-clock-it-3aa73.firebaseapp.com",
    projectId: "just-clock-it-3aa73",
    storageBucket: "just-clock-it-3aa73.appspot.com",
    messagingSenderId: "1046252689534",
    appId: "1:1046252689534:web:985de1806e5a298e6f202f",
    measurementId: "G-RL7ZKYY6Y1"
  };

  firebase.initializeApp(config);

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
   
    const snapShot = await userRef.get();

   
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };
  
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;