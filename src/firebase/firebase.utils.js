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
  
  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();
    //if user is not yet in the database, we will put it there
    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName, 
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }
    return userRef;
  };

  export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
      const collectionRef = firestore.collection(collectionKey);

      const batch = firestore.batch();
      objectsToAdd.forEach(obj => {
          const newDocRef = collectionRef.doc();
          batch.set(newDocRef, obj);
      });
      return await batch.commit();
  };

  export const convertCollectionsSnapshotToMap = collections => {
      const transformedCollection = collections.docs.map(doc => {
          const { title, items } = doc.data();

          return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title, 
            items
          }
      });

      return transformedCollection.reduce((accumulator, collection) => {
          accumulator[collection.title.toLowerCase()] = collection;
          return accumulator;
      }, {});
  };


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

