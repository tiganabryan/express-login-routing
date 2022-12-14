const express = require("express");
const app = express();

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
	} else if (req.query.password == undefined) {
		// if they go to localhost:5001/login with no query param
		throw new Error("you have not given a password, please try again");
	} else {
		res.send("incorrect password, please try again!");
	}
}

app.use((err, req, res, next) => {
	log(`error :'(`);
	next(err);
	log(err);
});

app.listen(PORT, () => {
	log(`server now listening on port ${PORT}:)`);
});
