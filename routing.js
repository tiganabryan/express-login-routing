const express = require("express");
const app = express();
const morgan = require("morgan");

const PORT = process.env.PORT || 5001;

const log = console.log;

app.use("/media", express.static("public"));
// http://localhost:5001/media/yoga-img.jpg <-- static media now available globally

// jumps down to the auth function and runs it -- evaluates the conditions in the query params
app.route("/login").get(auth, (req, res) => {
	// res.json({ "test": "json" })
	res.send("welcome to your dashboard.");
});

// http://localhost:5001/login?admin=true <-- admin query is true, show dashboard

function auth(req, res, next) {
	log("auth");
	if (req.query.password == "fakepassword") {
		next();
	} else {
		res.send("incorrect password, please try again!");
	}
}

app.listen(PORT, () => {
	log(`test routing file now listening on port ${PORT}:)`);
});
