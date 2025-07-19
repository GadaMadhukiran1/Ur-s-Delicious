// firebase-config.js

const firebaseConfig = {
    apiKey: "AIzaSyDm4RkLh7B2Q6Eke55X4czPdWpxhnkULjY",
    authDomain: "hotel-628ad.firebaseapp.com",
    projectId: "hotel-628ad",
    storageBucket: "hotel-628ad.appspot.com",
    messagingSenderId: "929505556456",
    appId: "1:929505556456:web:a92b21955fde4121e4965d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();