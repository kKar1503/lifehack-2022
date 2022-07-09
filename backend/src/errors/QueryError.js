const { BaseError } = require('./BaseError');

class QueryError extends BaseError {
	constructor() {
		super();
		this.name = 'QueryError';
		this.message = 'Invalid query';
		this.code = 400;
	}
}

class ParamTypeError extends QueryError {
	constructor(paramName, paramValue, expectedValue) {
		super();
		this.name = 'ParamTypeError';
		this.message = `Parameter '${paramName}' expected a ${Object.prototype.toString.call(
			expectedValue,
		)} but got a ${Object.prototype.toString.call(paramValue)}`;
	}
}

class ParamMissingError extends QueryError {
	constructor(paramName) {
		super();
		this.name = 'ParamMissingError';
		this.message = `Parameter '${paramName}' is missing`;
	}
}

class ValidationError extends QueryError {
	constructor() {
		super();
		this.name = 'ValidationError';
		this.message = 'Invalid data';
	}
}

class NotFoundError extends QueryError {
	constructor(item) {
		super();
		this.name = 'NotFoundError';
		this.message = `Cannot find ${item}`;
		this.code = 404;
	}
}

module.exports = {
	QueryError,
	NotFoundError,
	ValidationError,
	ParamMissingError,
	ParamTypeError,
};
