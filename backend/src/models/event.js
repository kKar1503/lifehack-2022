const { array, date, number, object, string } = require('yup');

module.exports = object({
	id: string(),
	name: string().required(),
	organiser: string().required(),
	attendees: array().of(string()),
	slots: number().integer().min(0).required(),
	start_date: date().required(),
	end_date: date().required(),
	description: string().notRequired(),
});
