require('dotenv').config();

const CONFIG = {
	PORT: process.env.PORT,
	NODE_ENV: process.env.NODE_ENV,
};

module.exports = CONFIG;
