const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const activitySchema = new Schema({
  activity_type: {
    type: String,
    enum: [
      "running",
      "walking",
      "bicycle riding",
      "swimming",
      "hiking",
      "aerobics",
      "treadmill",
      "yoga",
      "rope skipping",
      "sleep",
    ],
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  calories: {
    type: Number,
    default: null,
  },
  description: {
    type: String,
    default: null,
  },
  date: {
    type: Date,
    required: true
  },
});

const ActivityModel = mongoose.model("Activity", activitySchema);

module.exports = ActivityModel;
