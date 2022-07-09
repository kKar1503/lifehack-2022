const loggers = require('./logger');
const responses = require('./response');

module.exports = {
	loggers,
	responses: { ...responses },
};
