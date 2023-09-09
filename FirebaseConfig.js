import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBudMAnkyfQMpGJ1sc7tWdbVrOx93w8yJk',
  authDomain: 'auth-app-a0e86.firebaseapp.com',
  projectId: 'auth-app-a0e86',
  storageBucket: 'auth-app-a0e86.appspot.com',
  messagingSenderId: '548458354424',
  appId: '1:548458354424:web:727f4244d6ad2dd5f64d0d',
};

export const FIREBASE_APP = initializeApp(firebaseConfig);

export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
