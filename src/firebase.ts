import app from 'firebase/app';
import 'firebase/auth';


interface IConfig {
  apiKey: string,
  authDomain: string,
  databaseURL: string,
  projectId: string,
  storageBucket: string,
  messagingSenderId: string,
  appId: string,
  measurementId: string
};

const config: IConfig = {
  apiKey: "AIzaSyAFc_vm4UNbVYgAEhnCI8Zkq5hrgtBUeCU",
  authDomain: "easy-deck.firebaseapp.com",
  databaseURL: "https://easy-deck-default-rtdb.firebaseio.com",
  projectId: "easy-deck",
  storageBucket: "easy-deck.appspot.com",
  messagingSenderId: "847052181622",
  appId: "1:847052181622:web:212a8a2b775e6d7ee18f57",
  measurementId: "G-C6V50QVCT4"
};

class Firebase {
  auth: any;

  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
  }

  doCreateUserWithEmailAndPassword = (email: string, password: string) => this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email: string, password: string) => this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = (email: string) => this.auth.sendPasswordResetEmail(email);
 
  doPasswordUpdate = (password: string) => this.auth.currentUser.updatePassword(password);
}

export default Firebase;
