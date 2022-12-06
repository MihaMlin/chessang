import { createConnection } from 'mysql';

var db_config = {
    host: "eu-cdbr-west-03.cleardb.net",
    user: "b57cf024b25c7c",
    password: "2317a8a4",
    database: "heroku_01b7a35e3d1cfd1"
};

export var connection = handleDisconect();

function handleDisconect() {
  connection = createConnection(db_config);

  connection.connect((err) => {
    if (err) {
      console.log("Error while connecting to the database:", err);
      setTimeout(handleDisconect, 2000);
    }
    console.log("Connected to the Database")
  });

  connection.on("error", (err) => {
    console.log("database error", err);
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      handleDisconect();
    }
    else {
      throw err;
    }
  });
  return connection;
};

handleDisconect();