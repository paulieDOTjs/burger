// set up code to connect node to mysql
// export connection

const Sequelize = require("sequelize");

const connect = new Sequelize("burgersDB", "root", "root", {
  host: "localhost",
  dialect: "mysql",
  port: '8889',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

module.exports = connect;