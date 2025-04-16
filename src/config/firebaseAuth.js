import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// MAIN CONFIG
const firebaseConfig = {
    apiKey: "AIzaSyDztVn3utSbq0bXicfdzvdG0V_CuRp3ifg",
    authDomain: "fir-15-02-24.firebaseapp.com",
    databaseURL: "https://fir-15-02-24-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "fir-15-02-24",
    storageBucket: "fir-15-02-24.appspot.com",
    messagingSenderId: "205120726655",
    appId: "1:205120726655:web:1731db9e17b41293a3814a"
  };

// SIDDHART FIREBASE
// const firebaseConfig = {
//     apiKey: "AIzaSyCNHrWFGtFFmGo4GJD-FtXLuQWtoLWevLc",
//     authDomain: "test1-4df68.firebaseapp.com",
//     projectId: "test1-4df68",
//     storageBucket: "test1-4df68.appspot.com",
//     messagingSenderId: "815448162877",
//     appId: "1:815448162877:web:32d12f565e8fe957f7e054",
//     measurementId: "G-245EMTYFEK"
//   };

// const firebaseConfig = {
//     apiKey: "AIzaSyB1hqOmDerLJ0kDLpJptXZyUF4LVlbo4Q8",
//     authDomain: "project-21-02-2024.firebaseapp.com",
//     projectId: "project-21-02-2024",
//     storageBucket: "project-21-02-2024.appspot.com",
//     messagingSenderId: "387897356422",
//     appId: "1:387897356422:web:fb0a32415e17bd6bc52107"
// };

const app = initializeApp(firebaseConfig);
console.log(app);
export const auth = getAuth(app);

export const db = getFirestore(app);