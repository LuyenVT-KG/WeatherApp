import firebase from "firebase/app";
import "@firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAKP6wZEeUJZl5W_JI3fWNj_GBqgmewUy4",
  authDomain: "weatherapp-0104.firebaseapp.com",
  projectId: "weatherapp-0104",
  storageBucket: "weatherapp-0104.appspot.com",
  messagingSenderId: "383292413944",
  appId: "1:383292413944:web:af7a84e6c07330b49ea80d",
  measurementId: "G-EJXE9VF75G"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default app.firestore()