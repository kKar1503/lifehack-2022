const { initializeApp, cert } = require('firebase-admin/app');
// const { CONFIG } = require('../constants'); Not needed in Admin SDK
const serviceAccount = require('./serviceAccountKey.json');
const { getFirestore } = require('firebase-admin/firestore');

// const db = getFirestore(initializeApp(CONFIG.FIREBASE_CONFIG));

initializeApp({
	credential: cert(serviceAccount),
});

const db = getFirestore();

module.exports = {
	db,
	userCollection: db.collection('users'),
	eventCollection: db.collection('events'),
};
