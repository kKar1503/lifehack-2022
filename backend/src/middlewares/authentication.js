const { auth } = require('../database');
const { LoginError } = require('../errors');

module.exports = async (req, res, next) => {
	const token = req.headers.authorization?.split(' ')[1];

	const decodeValue = await auth.verifyIdToken(token);

	if (decodeValue) {
		req.user = decodeValue;
		return next();
	}

	return next(new LoginError());
};
