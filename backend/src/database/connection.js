const { initializeApp } = require('firebase/app');
const { CONFIG } = require('../constants');

const db = initializeApp(CONFIG.FIREBASE_CONFIG);

module.exports = db;
