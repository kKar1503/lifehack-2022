import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const app = initializeApp({
	apiKey: "AIzaSyA_YOidxVFSkliRy4U1VTV6NW1d7H1baeE",
	authDomain: "lifehack-2022-f818b.firebaseapp.com",
	projectId: "lifehack-2022-f818b",
	storageBucket: "lifehack-2022-f818b.appspot.com",
	messagingSenderId: "841157404209",
	appId: "1:841157404209:web:d2941617e6ee1bbc651710",
	measurementId: "G-J9BXC62GTW",
});

export const auth = getAuth(app);

export default app;
