const loggers = require('./logger');
const responses = require('./response');
const object = require('./object');

module.exports = {
	loggers,
	responses: { ...responses },
	object: { ...object },
};
