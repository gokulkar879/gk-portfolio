import { initializeApp } from 'firebase/app'

import {
    collection,
  getFirestore
} from 'firebase/firestore'

import {
  getAuth
} from 'firebase/auth'

import {
  getStorage,
  ref
} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAZSGbD28li62ZkAL7Dq3aer0SH7Yktddw",
  authDomain: "fir-dojo-a1e15.firebaseapp.com",
  projectId: "fir-dojo-a1e15",
  storageBucket: "fir-dojo-a1e15.appspot.com",
  messagingSenderId: "719627692061",
  appId: "1:719627692061:web:9ca0282bec71d8e55b7ef4"
};


//init firebase
initializeApp(firebaseConfig)

//init services
export const db = getFirestore()
export const auth = getAuth()
export const storage = getStorage()


//collection red to a particular collection
export const booksColRef = collection(db, 'books')
export const userColRef = collection(db, 'users')

//reference to the storage
export const storageRef = ref(storage, 'images')




