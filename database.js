import { createConnection } from 'mysql';

export var connection = createConnection({
    host: "eu-cdbr-west-03.cleardb.net",
    user: "b57cf024b25c7c",
    password: "2317a8a4",
    database: "heroku_01b7a35e3d1cfd1"
});

connection.connect((err) => {
    if (err) throw err;
    console.log("Connected to the Database")
});