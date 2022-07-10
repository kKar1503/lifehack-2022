const QueryError = require('./QueryError');
const AuthenticationError = require('./AuthError');
const InternalError = require('./InternalError');
const { BaseError } = require('./BaseError');

module.exports = {
	...QueryError,
	...AuthenticationError,
	...InternalError,
	BaseError,
};
