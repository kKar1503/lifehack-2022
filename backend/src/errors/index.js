const QueryError = require('./QueryError');
const AuthenticationError = require('./AuthError');
const InternalError = require('./InternalError');

module.exports = {
	...QueryError,
	...AuthenticationError,
	...InternalError,
};
