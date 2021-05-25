import firebase from "firebase";

class AuthService {
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`](); // new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(authProvider);
  }
}

export default AuthService;
