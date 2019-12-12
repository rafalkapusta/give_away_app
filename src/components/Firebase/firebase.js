import app from 'firebase/app'
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA0vyCDF2srGx9U1fnWBmzUBvD_20TmXio",
    authDomain: "giveawayapp-127aa.firebaseapp.com",
    databaseURL: "https://giveawayapp-127aa.firebaseio.com",
    projectId: "giveawayapp-127aa",
    storageBucket: "giveawayapp-127aa.appspot.com",
    messagingSenderId: "511270909995",
    appId: "1:511270909995:web:524eda740296e4463f926e",
    measurementId: "G-C9DFK4NBWJ"
};
// Initialize Firebase
class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);
        this.auth = app.auth();
    }
    // *** Auth API ***
    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);
}

export default Firebase;