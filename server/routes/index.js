const express = require("express");
const router = express.Router();
const cities = require("../data/cities.json");
const flights = require("../data/flights.json");

router.get("/getData", async (req, res, next) => {
	setTimeout(() => {
		if (flights && cities) {
			const data = {
				flights,
				cities,
			};
			res.json(data);
		} else {
			res.json({ error: "Error fetching data" });
		}
	}, 0);
});

module.exports = router;
