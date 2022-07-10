class BaseError extends Error {
	constructor() {
		super();
		this.name = 'BaseError';
		this.message = 'Client error';
		this.code = 400;
	}

	toJSON() {
		return {
			status: this.code,
			error: {
				name: this.name,
				message: this.message,
			},
		};
	}
}

module.exports = { BaseError };
