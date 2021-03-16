import  firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore';
import 'firebase/functions';
import 'firebase/analytics'


if( typeof window !== 'undefined' && !firebase.apps.length){
    firebase.initializeApp({
        apiKey: "AIzaSyBv4miXqOwxxstzKUYSOZmYcIeBPxhAoc8",
        authDomain: "nextjs-limit-test.firebaseapp.com",
        projectId: "nextjs-limit-test",
        storageBucket: "nextjs-limit-test.appspot.com",
        messagingSenderId: "181366210453",
        appId: "1:181366210453:web:5bf1b44ea73696fb69c09c",
        measurementId: "G-GB4X57ETNS"
    })
    firebase.analytics();
}


export default firebase
