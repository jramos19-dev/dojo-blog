import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyC0tBi-d7U8YL7LjBCReVFHEhLBDYIna48",
    authDomain: "udemyvue-7106c.firebaseapp.com",
    projectId: "udemyvue-7106c",
    storageBucket: "udemyvue-7106c.appspot.com",
    messagingSenderId: "58870491524",
    appId: "1:58870491524:web:f658a0945607818e2f95d1"
};
  

//init firebase
firebase.initializeApp(firebaseConfig)

//init firestore service
const projectFirestore = firebase.firestore()


export {projectFirestore}