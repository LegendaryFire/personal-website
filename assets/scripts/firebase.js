import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
const firebaseConfig = {
  apiKey: "AIzaSyBSpfwG-LXQ1Djza-H24S4BTRG27igwGjw",
  authDomain: "tristan-balon.firebaseapp.com",
  projectId: "tristan-balon",
  storageBucket: "tristan-balon.appspot.com",
  messagingSenderId: "812938974659",
  appId: "1:812938974659:web:83452a1799de0add829976",
  measurementId: "G-G0DHY1W4WT",
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);