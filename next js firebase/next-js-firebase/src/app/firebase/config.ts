// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDh4Xhf2BbmEf_WYx8nEK3pJJXvBsiGSRs",
  authDomain: "firstproject-7197d.firebaseapp.com",
  databaseURL: "https://firstproject-7197d-default-rtdb.firebaseio.com",
  projectId: "firstproject-7197d",
  storageBucket: "firstproject-7197d.appspot.com",
  messagingSenderId: "1020870496036",
  appId: "1:1020870496036:web:4653b4a44fee288b47edb1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
