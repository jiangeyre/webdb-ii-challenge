function validateCar(req, res, next) {
    const body = req.body;

    if (Object.keys(body).length === 0) {
      res.status(400).json({ message: "We are missing some car data." });
    } else if (!body.VIN || !body.make || !body.model || !body.mileage) {
      res
        .status(400)
        .json({ message: "We are missing a required VIN, make, model, and/or mileage field." });
    } else {
      next();
    }
};
  
module.exports = validateCar;