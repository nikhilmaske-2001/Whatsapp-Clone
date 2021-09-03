import firebase from "firebase/compat";

const firebaseConfig = {
    apiKey: "AIzaSyAQbdGV2AeBqA5iRT-aHl2JHm7CU3RXE8Q",
    authDomain: "whatsapp-clone-d192b.firebaseapp.com",
    projectId: "whatsapp-clone-d192b",
    storageBucket: "whatsapp-clone-d192b.appspot.com",
    messagingSenderId: "103510571920",
    appId: "1:103510571920:web:01a0aa4b5337c1e32fd115",
    measurementId: "G-GKCJJ03FWT"
}; 

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;