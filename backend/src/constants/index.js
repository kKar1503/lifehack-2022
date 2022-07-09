const CONFIG = require('./config');
const { WINSTON } = require('./winston');
const { getEnumValues } = require('./enums');
const GENERAL = require('./general');

module.exports = {
	getEnumValues,
	CONFIG,
	WINSTON,
	...GENERAL,
};
