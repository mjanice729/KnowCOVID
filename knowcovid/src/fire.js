import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyA0iY2Wb_kQwgU5_QlCTO66DCkxeskmO0I",
    authDomain: "login-9e602.firebaseapp.com",
    databaseURL: "https://login-9e602.firebaseio.com",
    projectId: "login-9e602",
    storageBucket: "login-9e602.appspot.com",
    messagingSenderId: "977634506194",
    appId: "1:977634506194:web:c226f383c7dcd3f344840b"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;