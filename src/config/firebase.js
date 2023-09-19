import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCHt2Dq-xrhjHa8Wmdk8i_d2Zd28g_Xne0",
  authDomain: "wbts-353e3.firebaseapp.com",
  projectId: "wbts-353e3",
  storageBucket: "wbts-353e3.appspot.com",
  messagingSenderId: "274078552348",
  appId: "1:274078552348:web:d67936d6fda36240b0aad9",
  measurementId: "G-W26V8K1S31",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
