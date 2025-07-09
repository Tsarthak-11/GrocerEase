import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCnKaHwjrvjh5FzvMIDGLjupo-re1m0tG4",
  authDomain: "fresh-cart-9eb7a.firebaseapp.com",
  projectId: "fresh-cart-9eb7a",
  storageBucket: "fresh-cart-9eb7a.appspot.com",
  messagingSenderId: "546413513066",
  appId: "1:546413513066:web:aad0887677ed7dde05fd13"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider(); 