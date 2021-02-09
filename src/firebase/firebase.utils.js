import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAuLCveItdWq-5kMeHpgTxDHMYLdmK-u84",
    authDomain: "botani-e069d.firebaseapp.com",
    projectId: "botani-e069d",
    storageBucket: "botani-e069d.appspot.com",
    messagingSenderId: "163988672146",
    appId: "1:163988672146:web:028c09b6140c05d03fa04b",
    measurementId: "G-C9WNCVTYMH"
  };
/*
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(firestore.doc('users/affdfafd23'));
}
*/
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;