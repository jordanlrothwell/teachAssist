const mongoose = require("mongoose");

const assessmentSchema = new mongoose.Schema({
  assessmentID: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  assessmentName: String,
  draftDue: Date,
  draftSubmitted: Boolean,
  draftQuality: String,
  finalDue: Date,
  finalSubmitted: Boolean,
  finalGrade: String,
});

assessmentSchema.virtual("draftEmailRequired").get(function () {
  if (Date.now() >= draftDue) {
    return true;
  }
  return false;
});

assessmentSchema.virtual("finalEmailRequired").get(function () {
  if (Date.now() >= finalDue) {
    return true;
  }
  return false;
});

module.exports = assessmentSchema;
