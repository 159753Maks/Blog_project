import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCps7Qfjdgu7-Uanedy26JEgYKeLxF3OL4",
    authDomain: "blog-96862.firebaseapp.com",
    projectId: "blog-96862",
    storageBucket: "blog-96862.firebasestorage.app",
    messagingSenderId: "360888318185",
    appId: "1:360888318185:web:6a16f39c7d67c5bb3cd878"
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);

// Экспорт сервисов, которые тебе нужны (например, Firestore и Authentication)
export const db = getFirestore(app);
export const auth = getAuth(app);