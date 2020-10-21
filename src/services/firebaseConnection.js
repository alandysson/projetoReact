import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyABfpCSTdXrVlCVoRzLdP372YYENlNhpfY",
    authDomain: "meuapp-724e1.firebaseapp.com",
    databaseURL: "https://meuapp-724e1.firebaseio.com",
    projectId: "meuapp-724e1",
    storageBucket: "meuapp-724e1.appspot.com",
    messagingSenderId: "412118602897",
    appId: "1:412118602897:web:0f3c482da78657855a5b30",
    measurementId: "G-01K777673W"
  };
  if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
  }

export default firebase;