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
					events.push({
						...doc.data(),
						id: doc.id,
					});
				});
				res.json(responses.success200(req, events));
			})
			.catch(error => {
				return next(error);
			});
	},

	findEventById: (req, res, next) => {
		const { id } = req.body;
		eventCollection
			.doc(id)
			.get()
			.then(snapshot => {
				if (snapshot.empty) return next(new NotFoundError('Event'));
				let events = [];
				snapshot.forEach(doc => {
					events.push({
						...doc.data(),
						id: doc.id,
					});
				});
				res.json(responses.success200(req, events));
			})
			.catch(error => {
				console.log('logging for route', error);
				return next(error);
			});
	},
};
