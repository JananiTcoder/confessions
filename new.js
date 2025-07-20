  const firebaseConfig = {
    apiKey: "AIzaSyBD0ICw9kuM9Td_naK5_eMF9pBuIjWVEGw",
    authDomain: "ecell-suggestion.firebaseapp.com",
    databaseURL: "https://ecell-suggestion-default-rtdb.firebaseio.com",
    projectId: "ecell-suggestion",
    storageBucket: "ecell-suggestion.firebasestorage.app",
    messagingSenderId: "963694224214",
    appId: "1:963694224214:web:b3cc06e97b212fdef26cf7",
    measurementId: "G-GMP1N2849E"
  };
  firebase.initializeApp(firebaseConfig);
  const contactFormDB=firebase.database().ref("confessions")