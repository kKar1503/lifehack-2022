const { Response } = require('../classes');

module.exports = {
	success200: (req, data) => {
		const response = new Response(data, true, 200, {
			paginate: req.pagination?.paginate
				? req.pagination.paginate
				: false,
		});
		if (req.pagination?.paginate)
			response
				.displayLimit(req.pagination.displayLimit)
				.page(req.pagination.page);
		return response;
	},
	success201: data => {
		const response = new Response(data, true, 201);
		return response;
	},
	error400: error => {
		const response = new Response(
			{ message: 'Error in request syntax' },
			false,
			400,
			{
				error: { code: error.code, message: error.message },
			},
		);
		return response;
	},
	error401: error => {
		const response = new Response(
			{ message: 'Reauthentication required' },
			false,
			401,
			{
				error: { code: error.code, message: error.message },
			},
		);
		return response;
	},
	error403: error => {
		const response = new Response(
			{ message: 'Forbidden action' },
			false,
			403,
			{
				error: { code: error.code, message: error.message },
			},
		);
		return response;
	},
	error404: error => {
		const response = new Response({ message: 'Not found' }, false, 404, {
			error: { code: error.code, message: error.message },
		});
		return response;
	},
	error500: error => {
		const response = new Response(
			{ message: 'Internal error' },
			false,
			500,
			{
				error: { code: error.code, message: error.message },
			},
		);
		return response;
	},
};
