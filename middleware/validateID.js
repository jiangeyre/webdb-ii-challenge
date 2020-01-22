const knex = require('knex');
const config = require('../knexfile.js');

const db = knex(config.development);

function validateId(req, res, next) {
    const id = req.params.id;

    db("cars")
      .where("id", "=", req.params.id)
      .then(car => {
        if (Object.keys(car).length === 0) {
          res.status(400).json({ message: "Invalid car ID." });
        } else {
          next();
        }
    });
};
  
module.exports = validateId;