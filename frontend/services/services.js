import { auth } from "./firebase";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	sendPasswordResetEmail,
	updateEmail,
	updatePassword,
} from "firebase/auth";

export function signup(email, password) {
	return createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password) {
	return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
	return auth.signOut();
}
