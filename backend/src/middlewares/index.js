const accessLogger = require('./morgan');
const errorHandler = require('./errorHandler');
const authentication = require('./authentication');

module.exports = {
	accessLogger,
	errorHandler,
	authentication,
};
