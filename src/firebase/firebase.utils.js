import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB5VW6XV74dM1K0fVo98s_a7zl24TZNtxY",
    authDomain: "peach-fire-db.firebaseapp.com",
    databaseURL: "https://peach-fire-db.firebaseio.com",
    projectId: "peach-fire-db",
    storageBucket: "peach-fire-db.appspot.com",
    messagingSenderId: "796025962451",
    appId: "1:796025962451:web:66a052afb2780c2968b926"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

