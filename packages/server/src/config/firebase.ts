import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, Firestore, setDoc, getDoc, addDoc } from 'firebase/firestore/lite';
import { IUser } from '../models/IUser';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8oZ6MEUqhX9aZ2PhFcWDE1zV1kGINDVw",
  authDomain: "notification-center-cd65a.firebaseapp.com",
  projectId: "notification-center-cd65a",
  storageBucket: "notification-center-cd65a.appspot.com",
  messagingSenderId: "533374675344",
  appId: "1:533374675344:web:e0c7d0b5a2bc0ca6eb2b15"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getAllUser(db: Firestore) {
  const usersCol = collection(db, 'users');
  const usersSnapshot = await getDocs(usersCol);
  const usersList = usersSnapshot.docs.map(doc => doc.data());
  return usersList;
}

async function getUser(db: Firestore, id: string) {
   

}

async function createUser(db: Firestore, user: IUser ) {
  
}

async function deleteUser(db: Firestore,) {
   

}




export { db, getUsers };
 