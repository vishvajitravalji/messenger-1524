const Sequelize = require("sequelize");

<<<<<<< HEAD
const db = new Sequelize(process.env.DATABASE_URL || "postgres://localhost:5432/messenger", {
  logging: false
});

=======
const db = new Sequelize(process.env.DATABASE_URL || "postgres://postgres:qwerty@localhost:5432/messenger", {
  logging: false
});


>>>>>>> 5243c98 (initial commit)
module.exports = db;
