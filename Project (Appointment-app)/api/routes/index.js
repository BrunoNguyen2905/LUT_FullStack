var express = require("express");
var router = express.Router();
const ObjectID = require("mongodb").ObjectID;

router.get("/appointments", (req, res, next) => {
  req.collection
    .find({})
    .toArray()
    .then((results) => res.json(results))
    .catch((error) => res.json(error));
});

router.get("/appointments/:id", (req, res, next) => {
  const { id } = req.params;
  const _id = ObjectID(id);
  req.collection
    .findOne({_id})
    // .toArray()
    .then((results) => res.json(results))
    .catch((error) => res.json(error));
});

router.post("/appointments", (req, res, next) => {
  const { appointmentDate, name, email } = req.body;
  if (!appointmentDate || !name || !email) {
    return res.status(400).json({
      message: "Appointment Date, Name and email are required",
    });
  }
  const payload = { appointmentDate, name, email };
  req.collection
    .insertOne(payload)
    .then((result) => res.json({ result, msg: appointmentDate }))
    .catch((error) => res.send(error));
});

router.put("/appointments/:id", (req, res, next) => {
  const { id } = req.params;
  const _id = ObjectID(id);
  const { appointmentDate, name, email } = req.body;
  const payload = { appointmentDate, name, email };
  req.collection
    .updateOne({_id}, {$set: payload})
    // .save()

    .then((result) => res.json({ result, msg: appointmentDate }))
    .catch((error) => res.send(error));
  // const updatedAppointment = await MovieService.update(movieId, update)
});

router.delete("/appointments/:id", (req, res, next) => {
  const { id } = req.params;
  const _id = ObjectID(id);
  req.collection
    .deleteOne({ _id })
    .then((result) => res.json(result))
    .catch((error) => res.send(error));
});

module.exports = router;
