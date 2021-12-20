const express = require("express");
const app = express();
const mysql = require("mysql");

const db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "password",
	database: "formoctagon",
});

app.get("/", (req, res) => {
	// var con = mysql.createConnection({
	// 	host: "localhost",
	// 	user: "root",
	// 	password: "password",
	// 	database: "formoctagon",
	// });

	// con.connect(function (err) {
	// 	if (err) throw err;
	// 	console.log("Connected!");
	// 	const sqlInsert =
	// 		"INSERT INTO users (firstName, lastName, email, zipcode, state) VALUES ('Jeremy', 'Sallin', 'jeremy@gmail.com', '90210', 'CA');";
	// 	con.query(sqlInsert, function (err, result) {
	// 		if (err) throw err;
	// 		console.log("1 record inserted");
	// 	});
	// });

	const sqlInsert =
		"INSERT INTO users (firstName, lastName, email, zipcode, state) VALUES ('Jeremy', 'Sallin', 'jeremy@gmail.com', '90210', 'CA');";
	db.query(sqlInsert, (err, result) => {
		res.send("hello pedro");
	});
});

app.listen(3001, () => {
	console.log("running on port 3001");
});
