const Sequelize = require("sequelize");

<<<<<<< HEAD
<<<<<<< HEAD
const db = new Sequelize(process.env.DATABASE_URL || "postgres://localhost:5432/messenger", {
  logging: false
});

=======
=======
>>>>>>> 5243c98 (initial commit)
const db = new Sequelize(process.env.DATABASE_URL || "postgres://postgres:qwerty@localhost:5432/messenger", {
  logging: false
});


<<<<<<< HEAD
>>>>>>> 5243c98 (initial commit)
=======
>>>>>>> 5243c98 (initial commit)
module.exports = db;
