import React, { createContext } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'

import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDwiiCwRG_bAwlmVoQXYgHBSGDExZ9vIYQ',
  authDomain: 'test-wup-9d3da.firebaseapp.com',
  projectId: 'test-wup-9d3da',
  storageBucket: 'test-wup-9d3da.appspot.com',
  messagingSenderId: '204649464963',
  appId: '1:204649464963:web:ba24f0c5902a0aeb3e47b6',
  measurementId: 'G-D9N6V7F483',
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
