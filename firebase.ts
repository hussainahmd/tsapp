
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore, initializeFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCw7pytdTRwdrxY_RnF2NKaEMMV_hIasHI",
    authDomain: "test1-8ca74.firebaseapp.com",
    projectId: "test1-8ca74",
    storageBucket: "test1-8ca74.appspot.com",
    messagingSenderId: "1062418255182",
    appId: "1:1062418255182:web:53f041bed578aff70aa21f"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app)
export const db = getFirestore(app)
//export const db2 = initializeFirestore(app, {experimentalForceLongPolling:true})

export function signIn(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password)
}

export function signUp(email: string, password: string) {
    return createUserWithEmailAndPassword(auth, email, password)
}