import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
	apiKey: "AIzaSyAeKR5ooBpbBeqDsDMaA-xYbzziNvHBEYM",
	authDomain: "mechshop-7bd45.firebaseapp.com",
	projectId: "mechshop-7bd45",
	storageBucket: "mechshop-7bd45.appspot.com",
	messagingSenderId: "306073408282",
	appId: "1:306073408282:web:2fcfaab671c9a533a7d2a3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {app,auth,db}