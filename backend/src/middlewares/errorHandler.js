const { loggers, responses } = require('../utils');
const { WINSTON } = require('../constants');

const {
	QueryError,
	InternalError,
	AuthenticationError,
	BaseError,
} = require('../errors');

const convertErrorForLog = error => {
	error.toJson?.() ??
		error.stack ??
		error.message ??
		error.toString?.() ??
		error;
};

module.exports = (error, req, res, next) => {
	console.log(error);

	if (res.headersSent) {
		loggers[WINSTON.ERROR](convertErrorForLog(error));
		return;
	}

	if (error instanceof BaseError) {
		loggers[WINSTON.ERROR](convertErrorForLog(error));
		return res.status(error.code).send(error.toJSON());
	}

	loggers[WINSTON.ERROR](convertErrorForLog(error));
	return res.status(500).send(responses.error500(error));
};
