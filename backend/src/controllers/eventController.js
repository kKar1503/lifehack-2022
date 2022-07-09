const { eventCollection } = require('../database');
const { responses } = require('../utils');
const { NotFoundError } = require('../errors');

module.exports = {
	// CREATE

	addEvent: (req, res, next) => {
		const data = req.body;
		eventCollection
			.add(data)
			.then(() =>
				res.json(
					responses.success200(req, { message: 'Event added!' }),
				),
			)
			.catch(error => {
				next(error);
			});
	},

	// READ

	findAllEvents: (req, res, next) => {
		eventCollection
			.get()
			.then(snapshot => {
				if (snapshot.empty) return next(new NotFoundError('Event'));
				let events = [];
				snapshot.forEach(doc => {
					events.push(doc.data());
				});
				res.json(responses.success200(req, events));
			})
			.catch(error => {
				return next(error);
			});
	},

	findEventByName: (req, res, next) => {
		const { name } = req.body;
		eventCollection
			.where('name', '==', name)
			.get()
			.then(snapshot => {
				if (snapshot.empty) return next(new NotFoundError('Event'));
				let events = [];
				snapshot.forEach(doc => {
					events.push(doc.data());
				});
				res.json(req, responses.success200(events));
			})
			.catch(error => {
				return next(error);
			});
	},
};
