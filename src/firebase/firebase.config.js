// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCatxb4k5WrTgEFmzNFyi0TduBtdGGwhdU",
  authDomain: "cookiteer-food-recipe.firebaseapp.com",
  projectId: "cookiteer-food-recipe",
  storageBucket: "cookiteer-food-recipe.appspot.com",
  messagingSenderId: "364583235340",
  appId: "1:364583235340:web:1f72be8b32845f9cb4a329"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;