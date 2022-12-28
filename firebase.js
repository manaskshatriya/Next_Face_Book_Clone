import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBIxR2GIXaqVaskx19iCB3ByFRRs43gsLM",
  authDomain: "facebook-clone-1200d.firebaseapp.com",
  databaseURL: "https://facebook-clone-1200d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "facebook-clone-1200d",
  storageBucket: "facebook-clone-1200d.appspot.com",
  messagingSenderId: "986395804741",
  appId: "1:986395804741:web:702dac23ef0b2c6e0d4f2c"
};

  const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
  const db = getFirestore();
  const storage = getStorage();
  
  export { app, db, storage };