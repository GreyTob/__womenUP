import React, { createContext } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'

import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBYNvp75-XezEMJxtunCpIt8SEcAJ-soVE',
  authDomain: 'finalwomenup.firebaseapp.com',
  projectId: 'finalwomenup',
  storageBucket: 'finalwomenup.appspot.com',
  messagingSenderId: '917458011154',
  appId: '1:917458011154:web:ddd95a853de1dd648044cb',
  measurementId: 'G-PKFFE4FFZJ',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
// firebase.analytics()

export const Context = createContext(null)
const firestore = firebase.firestore()

const app = (
  <Context.Provider value={{ firebase, firestore }}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Context.Provider>
)

ReactDOM.render(app, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
