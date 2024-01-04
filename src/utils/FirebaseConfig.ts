// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
    apiKey:process.env.NEXT_PUBLIC_FIREBASE_APIKEY as string, //"as string" only for apis not needed in client ts files
    authDomain:process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN as string,
    projectId:process.env.NEXT_PUBLIC_FIREBASE_PROJECTID as string ,
    storageBucket:process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET as string,
    messagingSenderId:process.env.NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID as string,
    appId:process.env.NEXT_PUBLIC_FIREBASE_APPID as string ,
    measurementId:process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENTID as string
  };


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//storage takes both app and storageURL see below
// export const storage = getStorage(app, process.env.FIREBASE_STORAGE_URL);
export const storage = getStorage();
