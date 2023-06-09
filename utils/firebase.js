// import { firestore } from 'firebase-admin';
import { initializeApp } from 'firebase/app';
import { getFirestore, getDocs, setDoc, doc, collection, query, orderBy, getDoc } from 'firebase/firestore';
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

//Get sorted documents
export async function getData(reference="tools", filter="title") {
    //get snapshot of the data
    const colRef = collection(db, reference);
    const q = query(colRef, orderBy(filter));
    const snapshot = await getDocs(q);
    const documents = snapshot.docs;
    const sorted = documents.map(d => {
        const id = d.id;
        const data = d.data()
        return [id, data];
    });
    return sorted;
}
//Get a specific document
export async function getDocument(title) {
    const docRef = doc(db,"tools", title);
    const snapshot = await getDoc(docRef);
    const document = snapshot.data();
    return document;
}
