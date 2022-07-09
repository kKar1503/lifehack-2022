const winston = require('winston');
const { combine, timestamp, prettyPrint } = winston.format;
const path = require('path');

const { WINSTON, getEnumValues } = require('../constants');
const LEVELS = getEnumValues(WINSTON);

const dirname = path.join(__dirname, '..', '..', 'logs');

const createLogger = level => {
	const fileTransport = new winston.transports.File({
		level,
		format: combine(timestamp(), prettyPrint()),
		filename: `${level}.log`,
		dirname,
	});

	const logger = winston.createLogger({
		level,
		levels: { [level]: 0 },
		transports: [fileTransport],
	});

	return (...args) => logger.log(level, ...args);
};

const loggers = {};

LEVELS.forEach(level => {
	loggers[level] = createLogger(level);
});

module.exports = loggers;
