import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTPz8QxXArUXzkACy3m1jgGU0WdOIyAS0",
  authDomain: "expense-tracker-a7905.firebaseapp.com",
  projectId: "expense-tracker-a7905",
  storageBucket: "expense-tracker-a7905.appspot.com",
  messagingSenderId: "386392530063",
  appId: "1:386392530063:web:07509a9ac6586e3579a4fa",
  measurementId: "G-E95RPLRVEL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

// Sign in function
export const signInWithGoogle = () => {
  return signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log("User Info: ", user);
      const name = result.user.displayName;
      localStorage.setItem("name",name);
      return user;  // Return user object after sign-in success
    })
    .catch((error) => {
      console.error("Error during sign-in: ", error);
      throw error;  // Return error if sign-in fails
    });
};
