import { initializeApp } from 'firebase/app';
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyC3Wwv0qI2RgW0sBLDMDi-MC-pLHdiHx3s",
    authDomain: "fir-crud-8650a.firebaseapp.com",
    projectId: "fir-crud-8650a",
    storageBucket: "fir-crud-8650a.appspot.com",
    messagingSenderId: "765499176003",
    appId: "1:765499176003:web:85588a36ebddfe87d550f6"
  };

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);