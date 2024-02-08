import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyA6hqThcAUXeRWTlBLsQMTG2sw-W5Lx744",
  authDomain: "indianspringskatahdins-187d9.firebaseapp.com",
  projectId: "indianspringskatahdins-187d9",
  storageBucket: "indianspringskatahdins-187d9.appspot.com",
  messagingSenderId: "49980286736",
  appId: "1:49980286736:web:c4cc74994248b9a5ea6795",
  measurementId: "G-5C26L7CC6X",
  databaseURL: "https://indianspringskatahdins-187d9-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);


const vueapp = createApp(App)

vueapp.use(router)

vueapp.mount('#app')
