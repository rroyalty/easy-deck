import app from 'firebase/app';

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
  constructor() {
    app.initializeApp(config);
  }
}

export default Firebase;
