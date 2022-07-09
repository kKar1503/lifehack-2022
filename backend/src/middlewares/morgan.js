const morgan = require("morgan");
const { loggers } = require("../utils");
const { WINSTON, CONFIG } = require("../constants");

module.exports =
	CONFIG.NODE_ENV === "production"
		? morgan("combined", {
				stream: {
					write: (str) => {
						loggers[WINSTON.ACCESS](str);
					},
				},
		  })
		: morgan("dev");
