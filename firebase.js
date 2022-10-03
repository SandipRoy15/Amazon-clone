import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyDElILHXRoWtEVO1Cj25X18w51fw9A6Byc",
    authDomain: "clone-1821f.firebaseapp.com",
    projectId: "clone-1821f",
    storageBucket: "clone-1821f.appspot.com",
    messagingSenderId: "107165599756",
    appId: "1:107165599756:web:098e03ff841276c2c5c629",
    measurementId: "G-C7PQGK85C3"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);


const auth =firebase.auth();
export {auth} ;