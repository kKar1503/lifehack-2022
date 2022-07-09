const express = require('express');
const cors = require('cors');
const app = express();
const { CONFIG, WINSTON } = require('./constants');
const { PORT = 3000, NODE_ENV = 'development' } = CONFIG;
const { loggers } = require('./utils');

const routes = require('./routes');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', routes);

// Used to running the database and server
(async () => {
	try {
		app.listen(PORT, () => {
			NODE_ENV === 'development'
				? console.log(`Server listening on port ${PORT}`)
				: loggers[WINSTON.DEBUG](`Server listening on port ${PORT}`);
		});
	} catch (error) {
		NODE_ENV === 'development'
			? console.log(`Failed to start server`, error)
			: loggers[WINSTON.ERROR](`Failed to start server`, error);
	}
})();

// https://nodejs.org/api/process.html#process_event_uncaughtexception
// https://stackoverflow.com/a/40867663
// used for cleaning up the application and then shut down
process.on('uncaughtException', (error, origin) => {
	if (NODE_ENV === 'development') {
		console.log(`An uncaught error at ${origin}`);
		console.log(`Uncaught error`, error);
	} else {
		loggers[WINSTON.ERROR](`An uncaught error at ${origin}`);
		loggers[WINSTON.ERROR](`Uncaught error`, error);
	}
	process.exit(1);
});

// last resort to catch rejections
// FOR DEV ONLY
process.on('unhandledRejection', (reason, promise) => {
	NODE_ENV === 'development'
		? console.log(`Uncaught rejection`, reason)
		: loggers[WINSTON.ERROR](`Uncaught rejection`, reason);
	promise.catch(e => {
		NODE_ENV === 'development'
			? console.log(`The error in promise ${e}`)
			: loggers[WINSTON.DEBUG](`The error in promise ${e}`);
	});
});
