// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDG5ss_jTJdCNUJebp_BkQZiwqkRuAVO2U",
  authDomain: "optilift-2212d.firebaseapp.com",
  databaseURL: "https://optilift-2212d-default-rtdb.firebaseio.com",
  projectId: "optilift-2212d",
  storageBucket: "optilift-2212d.appspot.com",
  messagingSenderId: "88731513693",
  appId: "1:88731513693:web:eceaf8c576289be7b22eb4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;