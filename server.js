const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const routes = require("./server/routes");
const port = process.env.PORT || 5000;

app.use(cors());
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	next();
});
app.use(bodyParser.json());
app.use("/api", routes);
app.use((err, req, res, next) => {
	console.log("Server error:", err);
	next();
});

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
