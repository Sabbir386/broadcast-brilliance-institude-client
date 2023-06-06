// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDqHMpLLsV3pQ01BX1-udfSQM6qc2ThgmI",
    authDomain: "brilliance-institude.firebaseapp.com",
    projectId: "brilliance-institude",
    storageBucket: "brilliance-institude.appspot.com",
    messagingSenderId: "437865129404",
    appId: "1:437865129404:web:65ef13cb1a799f734b77b9",
    measurementId: "G-1VRGEC5K45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
