const { initializeApp } = require('firebase/app');
const { getAuth } = require('firebase/auth');
const { getFirestore } = require('firebase/firestore');
const { getStorage } = require('firebase/storage');
require('dotenv').config();
const firebaseConfig = {
  apiKey: process.env.FB_APIKEY,
  authDomain: 'goit-lesson8.firebaseapp.com',
  projectId: 'goit-lesson8',
  storageBucket: 'goit-lesson8.appspot.com',
  messagingSenderId: '918932618468',
  appId: process.env.FB_APPID,
  measurementId: 'G-N1QYK3SNXG',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

module.exports = { auth, db, storage };
