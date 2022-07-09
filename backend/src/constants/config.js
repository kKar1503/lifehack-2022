require('dotenv').config();

const CONFIG = {
	PORT: process.env.PORT,
	NODE_ENV: process.env.NODE_ENV,
	FIREBASE_CONFIG: {
		apiKey: process.env.API_KEY,
		authDomain: process.env.AUTH_DOMAIN,
		projectId: process.env.PROJECT_ID,
		storageBucket: process.env.STORAGE_BUCKET,
		messagingSenderId: process.env.MESSAGING_SENDER_ID,
		appId: process.env.APP_ID,
		measurementId: process.env.MEASUREMENT_ID,
	},
};

module.exports = CONFIG;
