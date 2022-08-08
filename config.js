import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCfsW7IF_83qDeiQs6OUIHs7z_tIc6ahu0",
    authDomain: "crewpic-88195.firebaseapp.com",
    projectId: "crewpic-88195",
    storageBucket: "crewpic-88195.appspot.com",
    messagingSenderId: "674275991132",
    appId: "1:674275991132:web:050691520fcb86747d9099"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };