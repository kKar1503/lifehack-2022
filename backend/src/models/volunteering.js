const { number, object } = require('yup');
const EventSchema = require('./event');

module.exports = object({
	event: EventSchema,
	hours: number().integer().min(0).required(),
});
