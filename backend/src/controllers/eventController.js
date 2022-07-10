const { eventCollection } = require('../database');
const { responses, object } = require('../utils');
const { NotFoundError } = require('../errors');
const { EventModel } = require('../models');

module.exports = {
	// CREATE

	addEvent: async (req, res, next) => {
		try {
			const data = req.body;
			let event = await EventModel.validate(data);
			event = object.removeUnusedProp(event);
			object.convertDateToTimestamp(event);
			await eventCollection.add(event);
			res.json(responses.success200(req, { message: 'Event added!' }));
		} catch (error) {
			console.log('caught', error);
			next(error);
		}
	},

	// READ

	findAllEvents: (req, res, next) => {
		eventCollection
			.get()
			.then(snapshot => {
				if (snapshot.empty) return next(new NotFoundError('Event'));
				let events = [];
				snapshot.forEach(doc => {
					let event = {
						...doc.data(),
						id: doc.id,
					};
					object.convertTimestampToDate(event);
					event = object.filterByKeys(event, [
						'id',
						'name',
						'description',
					]);
					events.push(event);
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
			.then(doc => {
				console.log(doc);
				if (!doc.data()) return next(new NotFoundError('Event'));
				let event = {
					...doc.data(),
					id: doc.id,
				};
				object.convertTimestampToDate(event);
				EventModel.cast(event);
				event = object.omitByKeys(event, ['attendees']);
				res.json(responses.success200(req, event));
			})
			.catch(error => {
				console.log('logging for route', error);
				return next(error);
			});
	},
};
