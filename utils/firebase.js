// import { firestore } from 'firebase-admin';
import { initializeApp } from 'firebase/app';
import { getFirestore, getDocs, setDoc, doc, collection, connectFirestoreEmulator } from 'firebase/firestore';
//firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDDRxuZqR9AWHYnADGqO40oA2qafs-oGQY",
    authDomain: "toolboxai-a1954.firebaseapp.com",
    projectId: "toolboxai-a1954",
    storageBucket: "toolboxai-a1954.appspot.com",
    messagingSenderId: "20887386769",
    appId: "1:20887386769:web:f1a48f0a21adbc110e1d30",
    measurementId: "G-PFPND6L90M"
  };
//initialize firebasen
const app = initializeApp(firebaseConfig);

//Get a Firestore instance for storage
const db = getFirestore(app);
//initiate emolutor
connectFirestoreEmulator(db, "localhost", "5000");

//get a specific collection
export default async function getCollection(title="tools") {
    const snapshot = await getDocs(collection(db, "tools"));
    const documents = snapshot.docs;
    const data = documents.map(t => (t.data()));
    //return data
    return data;
}

//create a new document in tools
export async function setDocument(reference, data, collection = "tools") {
    try {
        //Create referense for the document
    const docRef = doc(db, collection, reference);
    //Add the document in database
    await setDoc(docRef, data);
    return docRef
    } catch (e) {
        return e
    }
}