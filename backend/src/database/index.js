const { initializeApp, cert } = require('firebase-admin/app');
// const { CONFIG } = require('../constants'); Not needed in Admin SDK
const serviceAccount = require('./serviceAccountKey.json');
const { getFirestore } = require('firebase-admin/firestore');
const { getAuth } = require('firebase-admin/auth');

// const db = getFirestore(initializeApp(CONFIG.FIREBASE_CONFIG));

initializeApp({
	credential: cert(serviceAccount),
});

const db = getFirestore();

const auth = getAuth();

module.exports = {
	auth,
	db,
	userCollection: db.collection('users'),
	eventCollection: db.collection('events'),
};
