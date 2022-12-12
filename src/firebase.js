
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyDjme6uGSYiCljx_qXQgMxeexUvz-kvue0",
  authDomain: "fir-auth-3fc61.firebaseapp.com",
  projectId: "fir-auth-3fc61",
  storageBucket: "fir-auth-3fc61.appspot.com",
  messagingSenderId: "613589026973",
  appId: "1:613589026973:web:7dac823788a762bf172c74"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
export{app,auth};