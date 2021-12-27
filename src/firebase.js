import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCOHzQ39SqacxZZPwIxGvlLjVCkc2ezvYY",
    authDomain: "todo-svelte-74fb5.firebaseapp.com",
    projectId: "todo-svelte-74fb5",
    storageBucket: "todo-svelte-74fb5.appspot.com",
    messagingSenderId: "361908836786",
    appId: "1:361908836786:web:ccf66342589063b9f4acab"
  };
  
console.log(firebase);

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const db = firebase.firestore();