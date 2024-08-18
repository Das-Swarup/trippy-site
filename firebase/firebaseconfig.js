// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const app = initializeApp({
  apiKey: "AIzaSyAyYEeJSUdWSU2KyHLYKjOSFodYoW2K__M",
  authDomain: "flytrail-96c13.firebaseapp.com",
  projectId: "flytrail-96c13",
  storageBucket: "flytrail-96c13.appspot.com",
  messagingSenderId: "393824041344",
  appId: "1:393824041344:web:b0b02a4c89791f63ef2965"
});

const database = getFirestore(app)

export {database}