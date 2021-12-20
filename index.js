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
	// const sqlInsert =
	// 	"INSERT INTO users (firstName, lastName, email, zipcode, state) VALUES ('Jeremy', 'Sallin', 'jeremy@gmail.com', '90210', 'CA');";
	// db.query(sqlInsert, (err, result) => {
	// 	res.send("hello pedro");
	// });
});

app.listen(3001, () => {
	console.log("running on port 3001");
});
