var express = require("express");
var router = express.Router();

const Activity = require("../models/Activity");

/* GET users listing. */
router.get("/", async function (req, res, next) {
  const limit = req.query.limit;
  let activity;
  if (limit) {
    activity = await Activity.find({}, null, {
      sort: { date: "desc" },
      limit: limit,
    });
  } else {
    activity = await Activity.find({}, null, {
      sort: { date: "desc" }
    });
  }
  res.status(200).send({ data: activity });
});

router.get("/:id", async function (req, res, next) {
  const { id } = req.params;
  const activity = await Activity.findById(id);
  res.status(200).send({ data: activity });
});

router.put("/:id", async function (req, res, next) {
  const payload = req.body;
  const { id } = req.params;
  const activity = await Activity.findByIdAndUpdate(id, payload);
  res.status(200).send({ status: "Success", data: payload });
});

router.post("/", async function (req, res, next) {
  const payload = req.body;
  const activity = new Activity(payload);
  await activity.save();
  res.status(201).send({ status: "Success", data: payload });
});

router.delete("/:id", async function (req, res, next) {
  const { id } = req.params;
  const activity = await Activity.findByIdAndDelete(id);
  res.status(200).send({ status: "Success" });
});
module.exports = router;
