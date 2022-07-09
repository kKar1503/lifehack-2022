class AuthenticationError extends Error {
	constructor() {
		super();
		this.name = 'AuthenticationError';
		this.message = 'Authentication query';
		this.code = 401;
	}
}

class LoginError extends AuthenticationError {
	constructor() {
		super();
		this.name = 'LoginError';
		this.message = 'Login failed';
	}
}

class PermissionError extends AuthenticationError {
	constructor(action = 'manage this document') {
		super();
		this.name = 'PermissionError';
		this.message = `Employee does not have permission to ${action}`;
		this.code = 403;
	}
}

module.exports = {
	AuthenticationError,
	LoginError,
	PermissionError,
};
