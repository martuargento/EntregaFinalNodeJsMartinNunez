import 'dotenv/config';

import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: "node-mn-pfi-firebase",
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: "353362836698",
  appId: process.env.FIREBASE_APP_ID
};
 
//initialize firebase
const app = initializeApp(firebaseConfig);

//initialize firestore
const db = getFirestore(app);

export { db };


 