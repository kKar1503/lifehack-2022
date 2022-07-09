require('dotenv').config();

const { PORT, NODE_ENV } = process.env;

const CONFIG = {
	PORT,
	NODE_ENV,
};

module.exports = CONFIG;
