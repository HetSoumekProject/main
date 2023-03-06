import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
export const firebaseConfig = {
  apiKey: "AIzaSyCauCyZ_cJPTfB7NTU2o__9nIwNK2E-uMw",
  authDomain: "theses-d8630.firebaseapp.com",
  projectId: "theses-d8630",
  storageBucket: "theses-d8630.appspot.com",
  messagingSenderId: "538652044583",
  appId: "1:538652044583:web:34d804bb19b74457c7cd02",
  measurementId: "G-477ME6GDK3"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);