import React, { createContext } from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import 'antd/dist/antd.css';

import firebase from 'firebase';
// import database from "firebase/database";
// import auth from "firebase/auth";

// import 'firebase/firestore'
// import 'firebase/auth'

// Initialize Firebase
firebase.initializeApp({
    apiKey: "AIzaSyBCKQkxkwiHrGl16VlSFvXlFa3NjNvF5_0",
    authDomain: "chat-react-e640f.firebaseapp.com",
    projectId: "chat-react-e640f",
    storageBucket: "chat-react-e640f.appspot.com",
    messagingSenderId: "351992397814",
    appId: "1:351992397814:web:2eacdbbf52b463c79411d7",
    measurementId: "G-BL2WPDTT64"
  }
);


 export const Context = createContext(null)

  const auth = firebase.auth()
  const firestore = firebase.firestore() 



ReactDOM.render(
  <Context.Provider value={{
    firebase,
    auth,
    firestore,
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);


