const db = require("knex")({
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    user: "root",
    password: "root",
    database: "absenSiswa",
    port: "3306",
  },
});

module.exports = db;
