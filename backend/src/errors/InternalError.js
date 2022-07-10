const { BaseError } = require('./BaseError');

class InternalError extends BaseError {
	constructor() {
		super();
		this.name = 'InternalError';
		this.message = 'An internal server error has occured';
		this.code = 500;
	}
}

module.exports = {
	InternalError,
};
