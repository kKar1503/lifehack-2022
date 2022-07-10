const _ = require('lodash');
const { Timestamp } = require('firebase-admin/firestore');

module.exports = {
	removeUnusedProp: object => {
		return _.omitBy(object, _.isNil);
	},
	convertDateToTimestamp: object => {
		Object.keys(object).map(key => {
			if (object[key] instanceof Date) {
				object[key] = Timestamp.fromDate(object[key]);
			}
		});
	},
	convertTimestampToDate: object => {
		Object.keys(object).map(key => {
			if (object[key] instanceof Timestamp) {
				object[key] = object[key].toDate();
			}
		});
	},
	filterByKeys: (object, keys = []) =>
		_.pickBy(object, (value, key) => keys.includes(key)),
	omitByKeys: (object, keys = []) =>
		_.omitBy(object, (value, key) => keys.includes(key)),
};
