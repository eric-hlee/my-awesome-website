var express = require("express");
var router = express.Router();
var MongoClient = require("mongodb").MongoClient;

// db url, collection name and db name
const url = "mongodb://ericlee:mongo@localhost:27017";
const dbName = "eric";
const collName = "work_experience";

router.get("/", (req, res, next) => {
	MongoClient.connect(url, function (err, client) {
		if (err) throw err;
		// get db
		const db = client.db(dbName);

		// get collection
		const collection = db.collection(collName);

		// find all documents in the collection
		collection.find().toArray((err, result) => {
			if (err) throw err;
			res.send(result);
		});

		// close db client
		client.close();
	});
});

module.exports = router;
