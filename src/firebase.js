
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC7rgPQmAgGVzbbL_4QCn60z8SqreED8vo",
    authDomain: "whatsapp-81127.firebaseapp.com",
    projectId: "whatsapp-81127",
    storageBucket: "whatsapp-81127.appspot.com",
    messagingSenderId: "581294583212",
    appId: "1:581294583212:web:01b81e2a0b892a00a31e09",
    measurementId: "G-5P37V1MD7L"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const db= firebaseApp.firestore();

  export {auth,provider};
  export default db;
