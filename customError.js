// custom error class

class customError extends Error {
	constructor(status, message) {
		super(); // <-- includes this from the Error obj
		this.status = status;
		this.message = message;
	}
}

module.exports = customError;
