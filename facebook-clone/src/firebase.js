// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyAxgykQ_VURvagpgYVzZHSySJoqjaSsmOE",
    authDomain: "facebook-clone-6073.firebaseapp.com",
    projectId: "facebook-clone-6073",
    storageBucket: "facebook-clone-6073.appspot.com",
    messagingSenderId: "978060735357",
    appId: "1:978060735357:web:50021d9ded3985b5641214",
    measurementId: "G-13DMNWFVPD"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

   export const auth = firebase.auth();
  

  export const provider = new firebase.auth.GoogleAuthProvider();

  export default db;


  

