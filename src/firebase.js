import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";

const config = {
    apiKey: "AIzaSyAyeSJlPvE59o7THiEagVi9j8QrOOgFvTI",
    authDomain: "kidslearning-9d5c2.firebaseapp.com",
    databaseURL: "https://kidslearning-9d5c2-default-rtdb.firebaseio.com",
    projectId: "kidslearning-9d5c2",
    storageBucket: "kidslearning-9d5c2.appspot.com",
    messagingSenderId: "1071646550626",
    appId: "1:1071646550626:web:65666d1fc8648759073f3b",
    measurementId: "G-VV057NL1S6"
  };

  const app = initializeApp(config);
  const database = getDatabase(app);
  export default database;