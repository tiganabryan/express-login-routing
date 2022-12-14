const express = require("express");
const app = express();

const PORT = process.env.PORT || 5001;

const log = console.log;

app.use("/", (req, res) => {
	// res.send("welcome home");
});

app.use((err, req, res, next) => {
	log(`error :'(`);
	next(err);
});

app.listen(PORT, () => {
	log(`server now listening on port ${PORT}:)`);
});
