import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDvL0PpdU654kJPVjQ0lM-PH0gpVYMbx5E",
  authDomain: "emovie-7e88f.firebaseapp.com",
  projectId: "emovie-7e88f",
  storageBucket: "emovie-7e88f.appspot.com",
  messagingSenderId: "22568050697",
  appId: "1:22568050697:web:c6762d3d0099da021b98d8",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const movieRef = collection(db, "movies");
export const reviewRef = collection(db, "reviews");
export default app;
