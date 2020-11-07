import * as firebase from 'firebase';
import 'firebase/firebase-firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAA-OnQ0ulAlLnzBZIJKCwN7tcEEpTolvA",
  authDomain: "stockatlocal.firebaseapp.com",
  databaseURL: "https://stockatlocal.firebaseio.com",
  projectId: "stockatlocal",
  storageBucket: "stockatlocal.appspot.com",
  messagingSenderId: "275046839873",
  appId: "1:275046839873:web:d2bd206bb73b11f0c1f8c0",
  measurementId: "G-TTMXNFTNDY"
};

class Firebase {
  constructor() {
    firebase.initializeApp(firebaseConfig);
    this.auth = firebase.auth();
  }

  login = (email, pass) => {
    return this.auth.signInWithEmailAndPassword(email, pass); 
  }

  createUser = async(name, email, pass, phone) => {
    await this.auth.createUserWithEmailAndPassword(email, pass);
    return this.auth.currentUser.updateProfile({
      displayName: name,
    })
  }

  getUser = () => {
    return this.auth.currentUser;
  }

  SignOut = () => {
    return this.auth.signOut();
  }

}

const firebaseService = new Firebase();
export default firebaseService;